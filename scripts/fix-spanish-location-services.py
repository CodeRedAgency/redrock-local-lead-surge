#!/usr/bin/env python3
"""
Fix Spanish JSON files to match exact structure of English originals
Ensures all content is properly translated and structure matches exactly
"""

import json
import os
import re
from deep_translator import GoogleTranslator

def translate_text(text, target_lang='es'):
    """Translate text to Spanish using Google Translate"""
    if not text or not isinstance(text, str):
        return text
    
    # Skip if already mostly Spanish (contains common Spanish words)
    spanish_indicators = ['el ', 'la ', 'de ', 'en ', 'y ', 'que ', 'por ', 'con ', 'para ', 'su ', 'nuestro', 'servicio']
    if any(indicator in text.lower() for indicator in spanish_indicators):
        # Check if it's already Spanish
        if len([w for w in spanish_indicators if w in text.lower()]) >= 2:
            return text
    
    try:
        translator = GoogleTranslator(source='en', target='es')
        translated = translator.translate(text)
        return translated
    except Exception as e:
        print(f"Translation error for '{text[:50]}...': {e}")
        return text

def translate_field(value, field_path=""):
    """Recursively translate fields in JSON structure"""
    if isinstance(value, dict):
        result = {}
        for key, val in value.items():
            # Skip certain fields that shouldn't be translated
            if key in ['id', 'slug', 'icon', 'loginUrl']:
                result[key] = val
            elif key == 'href':
                # Update URL from /en/ to /es/
                result[key] = val.replace('/en/', '/es/') if isinstance(val, str) else val
            elif key == 'name' and field_path.endswith('.location'):
                # Location names - translate specific ones
                location_translations = {
                    'South Florida': 'Sur de Florida',
                    'Las Vegas': 'Las Vegas',
                    'Maui': 'Maui',
                    'Oahu': 'Oahu',
                    'Columbus Ohio': 'Columbus Ohio',
                    'Dallas': 'Dallas'
                }
                result[key] = location_translations.get(val, val)
            else:
                result[key] = translate_field(val, f"{field_path}.{key}")
        return result
    elif isinstance(value, list):
        return [translate_field(item, field_path) for item in value]
    elif isinstance(value, str):
        # Translate service names
        service_translations = {
            'Standard Cleaning Services': 'Servicios de Limpieza Estándar',
            'Deep Cleaning Services': 'Servicios de Limpieza Profunda',
            'Airbnb Cleaning Services': 'Servicios de Limpieza de Airbnb',
            'Move Out Cleaning Services': 'Servicios de Limpieza al Mudarse',
            'Post Construction Cleaning Services': 'Servicios de Limpieza Post-Construcción',
            'Church Cleaning': 'Limpieza de Iglesias',
            'Data Center Cleaning': 'Limpieza de Centros de Datos',
            'Factory Cleaning': 'Limpieza de Fábricas',
            'Government Facility Cleaning': 'Limpieza de Instalaciones Gubernamentales',
            'Gym Cleaning': 'Limpieza de Gimnasios',
            'Industrial Cleaning': 'Limpieza Industrial',
            'Medical Office Cleaning': 'Limpieza de Oficinas Médicas',
            'Restaurant Cleaning': 'Limpieza de Restaurantes',
            'Retail Cleaning': 'Limpieza de Tiendas',
            'Salon Spa Cleaning': 'Limpieza de Salones y Spas',
            'School Cleaning': 'Limpieza de Escuelas',
            'Showroom Cleaning': 'Limpieza de Salas de Exhibición',
            'Warehouse Cleaning': 'Limpieza de Almacenes',
        }
        
        # Check for service names in text
        for en, es in service_translations.items():
            if en in value:
                value = value.replace(en, es)
        
        # Translate location names in text
        location_translations = {
            'South Florida': 'Sur de Florida',
        }
        for en, es in location_translations.items():
            if en in value:
                value = value.replace(en, es)
        
        # Translate the text
        return translate_text(value)
    else:
        return value

def fix_spanish_file(english_filepath, spanish_filepath):
    """Fix Spanish file to match English structure exactly"""
    try:
        # Read English file
        with open(english_filepath, 'r', encoding='utf-8') as f:
            english_data = json.load(f)
        
        # Create Spanish version with exact structure
        spanish_data = translate_field(english_data)
        
        # Ensure URLs are updated
        def update_urls(obj):
            if isinstance(obj, dict):
                for key, val in obj.items():
                    if key == 'href' and isinstance(val, str):
                        obj[key] = val.replace('/en/', '/es/')
                    elif key == 'bookingUrl' and isinstance(val, str):
                        obj[key] = val.replace('/en/', '/es/')
                    elif key == 'calculatorUrl' and isinstance(val, str):
                        obj[key] = val.replace('/en/', '/es/')
                    else:
                        update_urls(val)
            elif isinstance(obj, list):
                for item in obj:
                    update_urls(item)
        
        update_urls(spanish_data)
        
        # Write Spanish file
        with open(spanish_filepath, 'w', encoding='utf-8') as f:
            json.dump(spanish_data, f, indent=2, ensure_ascii=False)
        
        return True
    except Exception as e:
        print(f"Error processing {english_filepath}: {e}")
        return False

def main():
    """Fix all Spanish JSON files"""
    data_dir = os.path.join('my-next-app', 'data', 'location-services')
    
    if not os.path.exists(data_dir):
        print(f"Error: Directory {data_dir} does not exist")
        return
    
    locations = ['south-florida', 'las-vegas', 'oahu', 'maui', 'columbus-ohio', 'dallas']
    services = [
        'standard-cleaning-services',
        'deep-cleaning-services',
        'airbnb-cleaning-services',
        'move-out-cleaning-services',
        'post-construction-cleaning-services',
        'church-cleaning',
        'data-center-cleaning',
        'factory-cleaning',
        'government-facility-cleaning',
        'gym-cleaning',
        'industrial-cleaning',
        'medical-office-cleaning',
        'restaurant-cleaning',
        'retail-cleaning',
        'salon-spa-cleaning',
        'school-cleaning',
        'showroom-cleaning',
        'warehouse-cleaning',
    ]
    
    fixed = 0
    errors = 0
    
    for location_slug in locations:
        for service_slug in services:
            english_filename = f'{location_slug}-{service_slug}.json'
            spanish_filename = f'{location_slug}-{service_slug}-es.json'
            
            english_filepath = os.path.join(data_dir, english_filename)
            spanish_filepath = os.path.join(data_dir, spanish_filename)
            
            if not os.path.exists(english_filepath):
                continue
            
            if fix_spanish_file(english_filepath, spanish_filepath):
                print(f'Fixed: {spanish_filename}')
                fixed += 1
            else:
                errors += 1
    
    print(f'\n=== Summary ===')
    print(f'Fixed: {fixed}')
    print(f'Errors: {errors}')

if __name__ == '__main__':
    main()


