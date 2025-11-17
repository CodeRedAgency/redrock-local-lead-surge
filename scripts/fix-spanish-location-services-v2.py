#!/usr/bin/env python3
"""
Fix Spanish JSON files to match exact structure of English originals
Uses comprehensive translation dictionaries to ensure complete translation
"""

import json
import os

# Comprehensive translation dictionary
TRANSLATIONS = {
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
    'Las Vegas': 'Las Vegas',
    'Maui': 'Maui',
    'Oahu': 'Oahu',
    'Columbus Ohio': 'Columbus Ohio',
    'Dallas': 'Dallas',
    
    # Common phrases
    'Keep your': 'Mantenga su',
    'home consistently beautiful': 'hogar consistentemente hermoso',
    'with our reliable': 'con nuestro confiable',
    'cleaning service': 'servicio de limpieza',
    'Get your free quote!': '¡Obtenga su cotización gratis!',
    'Professional': 'Profesional',
    'in': 'en',
    'Maintain a consistently clean home': 'Mantenga un hogar consistentemente limpio',
    'and free up time': 'y libere tiempo',
    'for the things that matter most': 'para las cosas que más importan',
    'Our professional': 'Nuestro profesional',
    'keeps': 'mantiene',
    'properties spotless': 'propiedades impecables',
    'homes spotless': 'hogares impecables',
    'with flexible scheduling': 'con horarios flexibles',
    'that fits your busy lifestyle': 'que se adapta a su estilo de vida ocupado',
    'Why': 'Por Qué',
    'Residents Trust Red Rock Cleans': 'Residentes Confían en Red Rock Cleans',
    'All our cleaners undergo thorough background checks': 'Todos nuestros limpiadores se someten a verificaciones exhaustivas de antecedentes',
    'are fully insured': 'están completamente asegurados',
    'and receive ongoing training': 'y reciben capacitación continua',
    'to ensure the highest standards': 'para garantizar los más altos estándares',
    'Choose from weekly, bi-weekly, or monthly': 'Elija entre semanal, quincenal o mensual',
    'cleaning schedules': 'horarios de limpieza',
    'that work with your busy': 'que funcionan con su ocupado',
    'lifestyle and commitments': 'estilo de vida y compromisos',
    'Our systematic approach ensures': 'Nuestro enfoque sistemático garantiza',
    'every cleaning meets the same high standards': 'cada limpieza cumple con los mismos altos estándares',
    'giving you peace of mind': 'brindándole tranquilidad',
    'and a consistently spotless home': 'y un hogar consistentemente impecable',
    'Ready to Experience the Red Rock Cleans Difference?': '¿Listo para Experimentar la Diferencia de Red Rock Cleans?',
    'Join thousands of satisfied': 'Únase a miles de',
    'residents who trust Red Rock Cleans': 'residentes que confían en Red Rock Cleans',
    'for reliable, professional': 'para servicios confiables y profesionales',
    'Beyond': 'Además de',
    'we offer specialized services': 'ofrecemos servicios especializados',
    'to meet all your': 'para satisfacer todas sus',
    'property needs': 'necesidades de propiedad',
    'How often should I schedule': '¿Con qué frecuencia debo programar',
    'Most': 'La mayoría de los',
    'find that regular cleaning works best': 'encuentran que la limpieza regular funciona mejor',
    'We offer flexible scheduling': 'Ofrecemos horarios flexibles',
    'to match your lifestyle and budget': 'para adaptarse a su estilo de vida y presupuesto',
    'Do I need to provide cleaning supplies?': '¿Necesito proporcionar suministros de limpieza?',
    'No, we bring all professional-grade cleaning supplies': 'No, traemos todos los suministros de limpieza de grado profesional',
    'and equipment to every appointment': 'y equipo a cada cita',
    "What if I'm not satisfied with the cleaning?": '¿Qué pasa si no estoy satisfecho con la limpieza?',
    'We guarantee your satisfaction': 'Garantizamos su satisfacción',
    "If you're not completely happy": 'Si no está completamente satisfecho',
    'with any aspect of our service': 'con cualquier aspecto de nuestro servicio',
    "we'll return within 24 hours": 'regresaremos dentro de 24 horas',
    'to make it right at no additional charge': 'para corregirlo sin costo adicional',
    'Are your cleaners insured and background-checked?': '¿Están asegurados y verificados sus limpiadores?',
    'Yes, all our team members': 'Sí, todos los miembros de nuestro equipo',
    'undergo thorough background checks': 'se someten a verificaciones exhaustivas de antecedentes',
    'are fully insured and bonded': 'están completamente asegurados y con fianza',
    'and receive ongoing training': 'y reciben capacitación continua',
    'to ensure the highest standards of service and security': 'para garantizar los más altos estándares de servicio y seguridad',
    'Frequently Asked Questions': 'Preguntas Frecuentes',
    'Areas We Serve': 'Áreas que Servimos',
    'Other Cleaning Services': 'Otros Servicios de Limpieza',
    'for Your Property': 'para Su Propiedad',
    'Schedule Your Cleaning': 'Programe Su Limpieza',
    'Get Free Quote': 'Obtenga Cotización Gratis',
    'Comprehensive cleaning': 'Limpieza integral',
    'for move-ins': 'para mudanzas',
    'special occasions': 'ocasiones especiales',
    'or seasonal deep cleans': 'o limpiezas profundas estacionales',
    'Professional turnover cleaning': 'Limpieza profesional de cambio de huéspedes',
    'for vacation rental properties': 'para propiedades de alquiler vacacional',
    'Complete cleaning': 'Limpieza completa',
    'to secure your security deposit return': 'para asegurar la devolución de su depósito de seguridad',
    'Specialized cleaning': 'Limpieza especializada',
    'after construction or renovation projects': 'después de proyectos de construcción o renovación',
}

def translate_text(text):
    """Translate text using dictionary"""
    if not text or not isinstance(text, str):
        return text
    
    result = text
    
    # Apply translations in order (longest first)
    sorted_translations = sorted(TRANSLATIONS.items(), key=lambda x: len(x[0]), reverse=True)
    for en, es in sorted_translations:
        result = result.replace(en, es)
    
    return result

def translate_json_structure(obj):
    """Recursively translate JSON structure preserving exact format"""
    if isinstance(obj, dict):
        result = {}
        for key, value in obj.items():
            # Preserve certain fields as-is
            if key in ['id', 'slug', 'icon', 'loginUrl']:
                result[key] = value
            elif key == 'href' or key == 'bookingUrl' or key == 'calculatorUrl':
                # Update URLs
                if isinstance(value, str):
                    result[key] = value.replace('/en/', '/es/')
                else:
                    result[key] = value
            elif key == 'name' and isinstance(value, str):
                # Translate names (services, locations)
                result[key] = translate_text(value)
            else:
                result[key] = translate_json_structure(value)
        return result
    elif isinstance(obj, list):
        return [translate_json_structure(item) for item in obj]
    elif isinstance(obj, str):
        return translate_text(obj)
    else:
        return obj

def fix_spanish_file(english_filepath, spanish_filepath):
    """Fix Spanish file to match English structure exactly"""
    try:
        # Read English file
        with open(english_filepath, 'r', encoding='utf-8') as f:
            english_data = json.load(f)
        
        # Translate to Spanish preserving structure
        spanish_data = translate_json_structure(english_data)
        
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

if __name__ == '__main__':
    main()

