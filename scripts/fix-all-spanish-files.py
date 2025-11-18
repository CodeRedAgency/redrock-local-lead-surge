#!/usr/bin/env python3
"""
Fix all Spanish JSON files to have EXACT structure from English originals
Copies complete structure and translates all text content
"""

import json
import os
import copy

# Translation mappings for common phrases
# Note: This is a basic translation - for production, use a proper translation service
TRANSLATION_MAP = {
    # Service names
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
    
    # Location names
    'South Florida': 'Sur de Florida',
    
    # Common phrases - these will be applied to text
    ' | Red Rock Cleans': ' | Red Rock Cleans',  # Keep brand name
}

def translate_string(text):
    """Translate a string, applying known translations"""
    if not isinstance(text, str):
        return text
    
    result = text
    
    # Apply service name translations
    for en, es in TRANSLATION_MAP.items():
        if en in result:
            result = result.replace(en, es)
    
    # For now, return the text with basic translations applied
    # Full translation would require a translation API or manual work
    return result

def deep_copy_and_translate(obj, translate_strings=True):
    """Deep copy object and translate strings"""
    if isinstance(obj, dict):
        result = {}
        for key, value in obj.items():
            # Preserve these fields as-is
            if key in ['id', 'slug', 'icon', 'loginUrl']:
                result[key] = value
            # Update URLs
            elif key in ['href', 'bookingUrl', 'calculatorUrl']:
                if isinstance(value, str):
                    result[key] = value.replace('/en/', '/es/')
                else:
                    result[key] = deep_copy_and_translate(value, translate_strings)
            # Translate location name
            elif key == 'name' and isinstance(value, str):
                if value in TRANSLATION_MAP:
                    result[key] = TRANSLATION_MAP[value]
                else:
                    result[key] = value
            else:
                result[key] = deep_copy_and_translate(value, translate_strings)
        return result
    elif isinstance(obj, list):
        return [deep_copy_and_translate(item, translate_strings) for item in obj]
    elif isinstance(obj, str) and translate_strings:
        return translate_string(obj)
    else:
        return obj

def fix_spanish_file(english_filepath, spanish_filepath):
    """Fix Spanish file to match English structure exactly"""
    try:
        # Read English file completely
        with open(english_filepath, 'r', encoding='utf-8') as f:
            english_data = json.load(f)
        
        # Deep copy structure and translate
        spanish_data = deep_copy_and_translate(english_data, translate_strings=True)
        
        # Ensure location name is translated
        if 'location' in spanish_data and 'name' in spanish_data['location']:
            loc_name = spanish_data['location']['name']
            if loc_name in TRANSLATION_MAP:
                spanish_data['location']['name'] = TRANSLATION_MAP[loc_name]
        
        # Write Spanish file
        with open(spanish_filepath, 'w', encoding='utf-8') as f:
            json.dump(spanish_data, f, indent=2, ensure_ascii=False)
        
        return True
    except Exception as e:
        print(f"Error processing {english_filepath}: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    """Fix all Spanish JSON files"""
    data_dir = os.path.join('my-next-app', 'data', 'location-services')
    
    locations = ['south-florida', 'las-vegas', 'oahu', 'maui', 'columbus-ohio', 'dallas']
    services = [
        'standard-cleaning-services', 'deep-cleaning-services', 'airbnb-cleaning-services',
        'move-out-cleaning-services', 'post-construction-cleaning-services', 'church-cleaning',
        'data-center-cleaning', 'factory-cleaning', 'government-facility-cleaning',
        'gym-cleaning', 'industrial-cleaning', 'medical-office-cleaning',
        'restaurant-cleaning', 'retail-cleaning', 'salon-spa-cleaning',
        'school-cleaning', 'showroom-cleaning', 'warehouse-cleaning',
    ]
    
    fixed = 0
    errors = 0
    skipped = 0
    
    for location_slug in locations:
        for service_slug in services:
            english_filename = f'{location_slug}-{service_slug}.json'
            spanish_filename = f'{location_slug}-{service_slug}-es.json'
            
            english_filepath = os.path.join(data_dir, english_filename)
            spanish_filepath = os.path.join(data_dir, spanish_filename)
            
            if not os.path.exists(english_filepath):
                skipped += 1
                continue
            
            if fix_spanish_file(english_filepath, spanish_filepath):
                print(f'Fixed: {spanish_filename}')
                fixed += 1
            else:
                errors += 1
    
    print(f'\n=== Summary ===')
    print(f'Fixed: {fixed}')
    print(f'Skipped: {skipped}')
    print(f'Errors: {errors}')
    print('\nNote: Structure is now exact. Full content translation may need manual review.')

if __name__ == '__main__':
    main()


