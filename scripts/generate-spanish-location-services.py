#!/usr/bin/env python3
"""
Generate Spanish JSON content files for location-service combinations
Based on existing English JSON files and sitemap.xml
"""

import json
import os
import re

# Spanish translations mapping
SPANISH_TRANSLATIONS = {
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
    'South Florida': 'Sur de Florida',
    'Las Vegas': 'Las Vegas',
    'Maui': 'Maui',
    'Oahu': 'Oahu',
    'Columbus Ohio': 'Columbus Ohio',
    'Dallas': 'Dallas',
    'Professional & Vetted Team': 'Equipo Profesional y Verificado',
    'Flexible Scheduling': 'Horarios Flexibles',
    'Consistent Quality': 'Calidad Consistente',
    'Schedule Your Cleaning': 'Programe Su Limpieza',
    'Get Free Quote': 'Obtenga Cotización Gratis',
    'Frequently Asked Questions': 'Preguntas Frecuentes',
    'Areas We Serve': 'Áreas que Servimos',
    'Other Cleaning Services': 'Otros Servicios de Limpieza',
}

# Location name translations
LOCATION_TRANSLATIONS = {
    'South Florida': 'Sur de Florida',
    'Las Vegas': 'Las Vegas',
    'Maui': 'Maui',
    'Oahu': 'Oahu',
    'Columbus Ohio': 'Columbus Ohio',
    'Dallas': 'Dallas',
}

def translate_text(text, location_name=''):
    """Translate English text to Spanish"""
    if not text:
        return text
    
    # Replace location names
    for en, es in LOCATION_TRANSLATIONS.items():
        text = text.replace(en, es)
    
    # Common translations
    translations = {
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
        'with flexible scheduling': 'con horarios flexibles',
        'that fits your busy lifestyle': 'que se adapta a su estilo de vida ocupado',
        'Why': 'Por Qué',
        'Residents Trust Red Rock Cleans': 'Residentes Confían en Red Rock Cleans',
        'All our cleaners undergo thorough background checks': 'Todos nuestros limpiadores pasan por verificaciones exhaustivas de antecedentes',
        'are fully insured': 'están completamente asegurados',
        'and receive ongoing training': 'y reciben capacitación continua',
        'to ensure the highest standards': 'para garantizar los más altos estándares',
        'Choose from weekly, bi-weekly, or monthly': 'Elija entre semanal, quincenal o mensual',
        'cleaning schedules': 'horarios de limpieza',
        'that work with your busy': 'que funcionan con su ocupado',
        'lifestyle and commitments': 'estilo de vida y compromisos',
        'Our systematic approach ensures': 'Nuestro enfoque sistemático garantiza',
        'every cleaning meets the same high standards': 'cada limpieza cumple con los mismos altos estándares',
        'giving you peace of mind': 'dándole tranquilidad',
        'and a consistently spotless property': 'y una propiedad consistentemente impecable',
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
        "with any aspect of our service": 'con cualquier aspecto de nuestro servicio',
        "we'll return within 24 hours": 'regresaremos dentro de 24 horas',
        'to make it right at no additional charge': 'para corregirlo sin costo adicional',
        'Are your cleaners insured and background-checked?': '¿Están sus limpiadores asegurados y verificados?',
        'Yes, all our team members': 'Sí, todos los miembros de nuestro equipo',
        'undergo thorough background checks': 'pasan por verificaciones exhaustivas de antecedentes',
        'are fully insured and bonded': 'están completamente asegurados y afianzados',
        'and receive ongoing training': 'y reciben capacitación continua',
        'to ensure the highest standards of service and security': 'para garantizar los más altos estándares de servicio y seguridad',
    }
    
    # Apply translations
    for en, es in translations.items():
        text = text.replace(en, es)
    
    return text

def convert_to_spanish(json_data, location_slug):
    """Convert English JSON data to Spanish"""
    spanish_data = json.loads(json.dumps(json_data))  # Deep copy
    
    # Translate metadata
    if 'metadata' in spanish_data:
        if 'title' in spanish_data['metadata']:
            title = spanish_data['metadata']['title']
            # Replace service names
            for en, es in SPANISH_TRANSLATIONS.items():
                if en in title:
                    title = title.replace(en, es)
            # Replace location names
            for en, es in LOCATION_TRANSLATIONS.items():
                if en in title:
                    title = title.replace(en, es)
            spanish_data['metadata']['title'] = title
        
        if 'description' in spanish_data['metadata']:
            spanish_data['metadata']['description'] = translate_text(spanish_data['metadata']['description'])
    
    # Translate hero
    if 'hero' in spanish_data:
        if 'h1' in spanish_data['hero']:
            h1 = spanish_data['hero']['h1']
            for en, es in SPANISH_TRANSLATIONS.items():
                if en in h1:
                    h1 = h1.replace(en, es)
            for en, es in LOCATION_TRANSLATIONS.items():
                if en in h1:
                    h1 = h1.replace(en, es)
            spanish_data['hero']['h1'] = h1
        
        if 'subtitle' in spanish_data['hero']:
            spanish_data['hero']['subtitle'] = translate_text(spanish_data['hero']['subtitle'])
        
        if 'imageAlt' in spanish_data['hero']:
            spanish_data['hero']['imageAlt'] = translate_text(spanish_data['hero']['imageAlt'])
    
    # Translate checklist
    if 'checklist' in spanish_data and 'intro' in spanish_data['checklist']:
        spanish_data['checklist']['intro'] = translate_text(spanish_data['checklist']['intro'])
    
    # Translate trust section
    if 'trust' in spanish_data:
        if 'title' in spanish_data['trust']:
            spanish_data['trust']['title'] = translate_text(spanish_data['trust']['title'])
        if 'items' in spanish_data['trust']:
            for item in spanish_data['trust']['items']:
                if 'title' in item:
                    item['title'] = translate_text(item['title'])
                if 'description' in item:
                    item['description'] = translate_text(item['description'])
    
    # Translate areas served
    if 'areasServed' in spanish_data:
        if 'title' in spanish_data['areasServed']:
            spanish_data['areasServed']['title'] = translate_text(spanish_data['areasServed']['title'])
        if 'neighborhoods' in spanish_data['areasServed']:
            for neighborhood in spanish_data['areasServed']['neighborhoods']:
                if 'description' in neighborhood:
                    neighborhood['description'] = translate_text(neighborhood['description'])
                if 'faq' in neighborhood:
                    for faq_item in neighborhood['faq']:
                        if 'question' in faq_item:
                            faq_item['question'] = translate_text(faq_item['question'])
                        if 'answer' in faq_item:
                            faq_item['answer'] = translate_text(faq_item['answer'])
                if 'testimonial' in neighborhood:
                    if 'text' in neighborhood['testimonial']:
                        neighborhood['testimonial']['text'] = translate_text(neighborhood['testimonial']['text'])
    
    # Translate other services
    if 'otherServices' in spanish_data:
        if 'title' in spanish_data['otherServices']:
            spanish_data['otherServices']['title'] = translate_text(spanish_data['otherServices']['title'])
        if 'description' in spanish_data['otherServices']:
            spanish_data['otherServices']['description'] = translate_text(spanish_data['otherServices']['description'])
        if 'services' in spanish_data['otherServices']:
            for service in spanish_data['otherServices']['services']:
                if 'name' in service:
                    for en, es in SPANISH_TRANSLATIONS.items():
                        if en in service['name']:
                            service['name'] = service['name'].replace(en, es)
                if 'description' in service:
                    service['description'] = translate_text(service['description'])
                if 'href' in service:
                    service['href'] = service['href'].replace('/en/', '/es/')
    
    # Translate FAQ
    if 'faq' in spanish_data:
        if 'title' in spanish_data['faq']:
            spanish_data['faq']['title'] = translate_text(spanish_data['faq']['title'])
        if 'items' in spanish_data['faq']:
            for item in spanish_data['faq']['items']:
                if 'question' in item:
                    item['question'] = translate_text(item['question'])
                if 'answer' in item:
                    item['answer'] = translate_text(item['answer'])
    
    # Translate CTA
    if 'cta' in spanish_data:
        if 'title' in spanish_data['cta']:
            spanish_data['cta']['title'] = translate_text(spanish_data['cta']['title'])
        if 'description' in spanish_data['cta']:
            spanish_data['cta']['description'] = translate_text(spanish_data['cta']['description'])
        if 'primaryButton' in spanish_data['cta']:
            if 'text' in spanish_data['cta']['primaryButton']:
                spanish_data['cta']['primaryButton']['text'] = translate_text(spanish_data['cta']['primaryButton']['text'])
            if 'href' in spanish_data['cta']['primaryButton']:
                spanish_data['cta']['primaryButton']['href'] = spanish_data['cta']['primaryButton']['href'].replace('/en/', '/es/')
        if 'secondaryButton' in spanish_data['cta']:
            if 'text' in spanish_data['cta']['secondaryButton']:
                spanish_data['cta']['secondaryButton']['text'] = translate_text(spanish_data['cta']['secondaryButton']['text'])
            if 'href' in spanish_data['cta']['secondaryButton']:
                spanish_data['cta']['secondaryButton']['href'] = spanish_data['cta']['secondaryButton']['href'].replace('/en/', '/es/')
    
    # Update location URLs
    if 'location' in spanish_data:
        if 'bookingUrl' in spanish_data['location']:
            spanish_data['location']['bookingUrl'] = spanish_data['location']['bookingUrl'].replace('/en/', '/es/')
        if 'calculatorUrl' in spanish_data['location']:
            spanish_data['location']['calculatorUrl'] = spanish_data['location']['calculatorUrl'].replace('/en/', '/es/')
        if 'name' in spanish_data['location']:
            location_name = spanish_data['location']['name']
            if location_name in LOCATION_TRANSLATIONS:
                spanish_data['location']['name'] = LOCATION_TRANSLATIONS[location_name]
    
    return spanish_data

def main():
    """Generate Spanish JSON files from English templates"""
    input_dir = os.path.join('my-next-app', 'data', 'location-services')
    output_dir = input_dir  # Save in same directory with -es suffix
    
    if not os.path.exists(input_dir):
        print(f"Error: Directory {input_dir} does not exist")
        return
    
    # Get all location-service combinations from sitemap
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
    
    generated = 0
    skipped = 0
    errors = 0
    
    for location_slug in locations:
        for service_slug in services:
            # Read English file
            english_filename = f'{location_slug}-{service_slug}.json'
            english_filepath = os.path.join(input_dir, english_filename)
            
            if not os.path.exists(english_filepath):
                skipped += 1
                continue
            
            # Generate Spanish filename
            spanish_filename = f'{location_slug}-{service_slug}-es.json'
            spanish_filepath = os.path.join(output_dir, spanish_filename)
            
            # Skip if Spanish file already exists
            if os.path.exists(spanish_filepath):
                skipped += 1
                continue
            
            try:
                # Read English JSON
                with open(english_filepath, 'r', encoding='utf-8') as f:
                    english_data = json.load(f)
                
                # Convert to Spanish
                spanish_data = convert_to_spanish(english_data, location_slug)
                
                # Write Spanish JSON
                with open(spanish_filepath, 'w', encoding='utf-8') as f:
                    json.dump(spanish_data, f, indent=2, ensure_ascii=False)
                
                print(f'Generated: {spanish_filename}')
                generated += 1
            except Exception as e:
                print(f'Error processing {english_filename}: {e}')
                errors += 1
    
    print(f'\n=== Summary ===')
    print(f'Generated: {generated}')
    print(f'Skipped: {skipped}')
    print(f'Errors: {errors}')

if __name__ == '__main__':
    main()


