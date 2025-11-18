#!/usr/bin/env python3
"""
Generate JSON content files for location-service combinations
Based on the pattern from existing files and sitemap.xml
"""

import json
import os

# Location mappings
LOCATIONS = {
    'las-vegas': {'name': 'Las Vegas', 'slug': 'las-vegas', 'phone': '(702) 508-0098'},
    'maui': {'name': 'Maui', 'slug': 'maui', 'phone': '(808) 909-3038'},
    'oahu': {'name': 'Oahu', 'slug': 'oahu', 'phone': '(808) 909-8801'},
    'south-florida': {'name': 'South Florida', 'slug': 'south-florida', 'phone': '(954) 469-8881'},
    'columbus-ohio': {'name': 'Columbus Ohio', 'slug': 'columbus-ohio', 'phone': '(380) 235-3135'},
    'dallas': {'name': 'Dallas', 'slug': 'dallas', 'phone': '(972) 992-2576'},
}

# Service mappings with descriptions
SERVICES = {
    'standard-cleaning-services': {
        'name': 'Standard Cleaning Services',
        'description': 'Keep your {location} home consistently beautiful with our reliable standard cleaning service.',
        'hero_subtitle': 'Maintain a consistently clean home and free up time for the things that matter most.'
    },
    'deep-cleaning-services': {
        'name': 'Deep Cleaning Services',
        'description': 'Comprehensive deep cleaning services in {location}.',
        'hero_subtitle': 'Experience a thorough, comprehensive deep clean that reaches every corner of your home.'
    },
    'airbnb-cleaning-services': {
        'name': 'Airbnb Cleaning Services',
        'description': 'Professional Airbnb cleaning services in {location}.',
        'hero_subtitle': 'Keep your vacation rental property guest-ready with our reliable Airbnb cleaning service.'
    },
    'move-out-cleaning-services': {
        'name': 'Move Out Cleaning Services',
        'description': 'Professional move out cleaning services in {location}.',
        'hero_subtitle': 'Secure your security deposit with our comprehensive move out cleaning service.'
    },
    'post-construction-cleaning-services': {
        'name': 'Post Construction Cleaning Services',
        'description': 'Professional post construction cleaning services in {location}.',
        'hero_subtitle': 'Transform your construction site into a move-in ready space with our specialized post construction cleaning service.'
    },
    'church-cleaning': {
        'name': 'Church Cleaning',
        'description': 'Professional church cleaning services in {location}.',
        'hero_subtitle': 'Maintain a clean, welcoming environment for your congregation with our specialized church cleaning service.'
    },
    'data-center-cleaning': {
        'name': 'Data Center Cleaning',
        'description': 'Professional data center cleaning services in {location}.',
        'hero_subtitle': 'Protect your critical IT infrastructure with our specialized data center cleaning service.'
    },
    'factory-cleaning': {
        'name': 'Factory Cleaning',
        'description': 'Professional factory cleaning services in {location}.',
        'hero_subtitle': 'Maintain a clean, safe, and compliant manufacturing environment with our specialized factory cleaning service.'
    },
    'government-facility-cleaning': {
        'name': 'Government Facility Cleaning',
        'description': 'Professional government facility cleaning services in {location}.',
        'hero_subtitle': 'Maintain clean, professional government facilities with our specialized cleaning service.'
    },
    'gym-cleaning': {
        'name': 'Gym Cleaning',
        'description': 'Professional gym cleaning services in {location}.',
        'hero_subtitle': 'Maintain a clean, hygienic fitness environment with our specialized gym cleaning service.'
    },
    'industrial-cleaning': {
        'name': 'Industrial Cleaning',
        'description': 'Professional industrial cleaning services in {location}.',
        'hero_subtitle': 'Maintain a clean, safe, and efficient industrial environment with our comprehensive industrial cleaning service.'
    },
    'medical-office-cleaning': {
        'name': 'Medical Office Cleaning',
        'description': 'Professional medical office cleaning services in {location}.',
        'hero_subtitle': 'Maintain a sterile, safe healthcare environment with our specialized medical office cleaning service.'
    },
    'restaurant-cleaning': {
        'name': 'Restaurant Cleaning',
        'description': 'Professional restaurant cleaning services in {location}.',
        'hero_subtitle': 'Maintain a clean, safe, and compliant dining environment with our specialized restaurant cleaning service.'
    },
    'retail-cleaning': {
        'name': 'Retail Cleaning',
        'description': 'Professional retail cleaning services in {location}.',
        'hero_subtitle': 'Maintain a clean, welcoming shopping environment with our specialized retail cleaning service.'
    },
    'salon-spa-cleaning': {
        'name': 'Salon Spa Cleaning',
        'description': 'Professional salon and spa cleaning services in {location}.',
        'hero_subtitle': 'Maintain a clean, hygienic, and welcoming environment with our specialized salon and spa cleaning service.'
    },
    'school-cleaning': {
        'name': 'School Cleaning',
        'description': 'Professional school cleaning services in {location}.',
        'hero_subtitle': 'Maintain a clean, healthy learning environment with our specialized school cleaning service.'
    },
    'showroom-cleaning': {
        'name': 'Showroom Cleaning',
        'description': 'Professional showroom cleaning services in {location}.',
        'hero_subtitle': 'Maintain a pristine, professional showroom environment with our specialized cleaning service.'
    },
    'warehouse-cleaning': {
        'name': 'Warehouse Cleaning',
        'description': 'Professional warehouse cleaning services in {location}.',
        'hero_subtitle': 'Maintain a clean, safe, and efficient warehouse environment with our specialized cleaning service.'
    },
}

def generate_json(location_slug, service_slug):
    """Generate JSON content for a location-service combination"""
    location = LOCATIONS[location_slug]
    service = SERVICES[service_slug]
    
    location_name = location['name']
    service_name = service['name']
    
    # Generate neighborhoods based on location
    neighborhoods = []
    if location_slug == 'las-vegas':
        neighborhoods = [
            {'id': 'summerlin', 'name': 'Summerlin', 'description': f'Summerlin homeowners trust our professional {service_name.lower()} to maintain their beautiful properties.'},
            {'id': 'henderson', 'name': 'Henderson', 'description': f'Henderson homeowners rely on our reliable {service_name.lower()} to keep their properties spotless.'}
        ]
    elif location_slug == 'maui':
        neighborhoods = [
            {'id': 'wailea', 'name': 'Wailea', 'description': f'Wailea homeowners trust our professional {service_name.lower()} to maintain their luxury properties.'},
            {'id': 'kihei', 'name': 'Kihei', 'description': f'Kihei residents rely on our reliable {service_name.lower()} to keep their properties spotless.'}
        ]
    elif location_slug == 'oahu':
        neighborhoods = [
            {'id': 'honolulu', 'name': 'Honolulu', 'description': f'Honolulu residents trust our professional {service_name.lower()} to maintain their properties.'},
            {'id': 'waikiki', 'name': 'Waikiki', 'description': f'Waikiki property owners rely on our reliable {service_name.lower()} to keep their properties spotless.'}
        ]
    elif location_slug == 'south-florida':
        neighborhoods = [
            {'id': 'weston', 'name': 'Weston', 'description': f'Weston homeowners trust our professional {service_name.lower()} to maintain their beautiful properties.'},
            {'id': 'fort-lauderdale', 'name': 'Fort Lauderdale', 'description': f'Fort Lauderdale homeowners rely on our reliable {service_name.lower()} to keep their properties spotless.'}
        ]
    elif location_slug == 'columbus-ohio':
        neighborhoods = [
            {'id': 'dublin', 'name': 'Dublin', 'description': f'Dublin residents trust our professional {service_name.lower()} to maintain their properties.'},
            {'id': 'columbus', 'name': 'Columbus', 'description': f'Columbus property owners rely on our reliable {service_name.lower()} to keep their properties spotless.'}
        ]
    elif location_slug == 'dallas':
        neighborhoods = [
            {'id': 'plano', 'name': 'Plano', 'description': f'Plano residents trust our professional {service_name.lower()} to maintain their properties.'},
            {'id': 'dallas', 'name': 'Dallas', 'description': f'Dallas property owners rely on our reliable {service_name.lower()} to keep their properties spotless.'}
        ]
    
    # Generate other services (exclude current service)
    other_services = []
    for other_service_slug, other_service in SERVICES.items():
        if other_service_slug != service_slug and other_service_slug in ['standard-cleaning-services', 'deep-cleaning-services', 'airbnb-cleaning-services', 'move-out-cleaning-services', 'post-construction-cleaning-services']:
            other_services.append({
                'name': other_service['name'],
                'description': f'Professional {other_service["name"].lower()} for your property.',
                'href': f'/en/{location_slug}/{other_service_slug}'
            })
    
    # Generate JSON structure
    json_data = {
        'metadata': {
            'title': f'{service_name} {location_name} | Red Rock Cleans',
            'description': service['description'].format(location=location_name) + f' Get your free quote!'
        },
        'hero': {
            'h1': f'Professional {service_name} in {location_name}',
            'subtitle': service['hero_subtitle'] + f' Our professional {service_name.lower()} keeps {location_name} properties spotless.',
            'imageAlt': f'Professional {service_name.lower()} in {location_name}'
        },
        'checklist': {
            'intro': f'Our comprehensive {service_name.lower()} in {location_name} includes:'
        },
        'trust': {
            'title': f'Why {location_name} Residents Trust Red Rock Cleans',
            'items': [
                {
                    'icon': 'shield',
                    'title': 'Professional & Vetted Team',
                    'description': 'All our cleaners undergo thorough background checks, are fully insured, and receive ongoing training to ensure the highest standards.'
                },
                {
                    'icon': 'clock',
                    'title': 'Flexible Scheduling',
                    'description': f'Choose from weekly, bi-weekly, or monthly cleaning schedules that work with your busy {location_name} lifestyle and commitments.'
                },
                {
                    'icon': 'star',
                    'title': 'Consistent Quality',
                    'description': 'Our systematic approach ensures every cleaning meets the same high standards, giving you peace of mind and a consistently spotless property.'
                }
            ]
        },
        'areasServed': {
            'title': f'Areas We Serve in {location_name}',
            'neighborhoods': neighborhoods
        },
        'otherServices': {
            'title': f'Other Cleaning Services for Your Property in {location_name}',
            'description': f'Beyond {service_name.lower()}, we offer specialized services to meet all your {location_name} property needs.',
            'services': other_services[:4]  # Limit to 4 services
        },
        'faq': {
            'title': 'Frequently Asked Questions',
            'items': [
                {
                    'question': f'How often should I schedule {service_name.lower()}?',
                    'answer': f'Most {location_name} residents find that regular cleaning works best. We offer flexible scheduling to match your lifestyle and budget.'
                },
                {
                    'question': 'Do I need to provide cleaning supplies?',
                    'answer': 'No, we bring all professional-grade cleaning supplies and equipment to every appointment.'
                },
                {
                    'question': 'What if I\'m not satisfied with the cleaning?',
                    'answer': 'We guarantee your satisfaction. If you\'re not completely happy with any aspect of our service, we\'ll return within 24 hours to make it right at no additional charge.'
                },
                {
                    'question': 'Are your cleaners insured and background-checked?',
                    'answer': 'Yes, all our team members undergo thorough background checks, are fully insured and bonded, and receive ongoing training to ensure the highest standards of service and security.'
                }
            ]
        },
        'cta': {
            'title': 'Ready to Experience the Red Rock Cleans Difference?',
            'description': f'Join thousands of satisfied {location_name} residents who trust Red Rock Cleans for reliable, professional {service_name.lower()}.',
            'primaryButton': {
                'text': 'Schedule Your Cleaning',
                'href': f'/en/book-now-{location_slug}'
            },
            'secondaryButton': {
                'text': 'Get Free Quote',
                'href': f'/en/{location_slug}-calculator'
            }
        },
        'location': {
            'name': location_name,
            'slug': location_slug,
            'bookingUrl': f'/en/book-now-{location_slug}',
            'calculatorUrl': f'/en/{location_slug}-calculator',
            'loginUrl': f'https://customer-portal.maidily.com/red-rock-cleans-{location_slug}/sign-in'
        }
    }
    
    return json_data

def main():
    """Generate all missing JSON files"""
    output_dir = os.path.join('my-next-app', 'data', 'location-services')
    os.makedirs(output_dir, exist_ok=True)
    
    # Skip South Florida (already created) and las-vegas-standard-cleaning-services (already exists)
    locations_to_process = ['las-vegas', 'maui', 'oahu', 'columbus-ohio', 'dallas']
    skip_files = {
        ('south-florida', None),  # Skip all South Florida
        ('las-vegas', 'standard-cleaning-services'),  # Skip this specific file
    }
    
    generated = 0
    skipped = 0
    
    for location_slug in locations_to_process:
        for service_slug in SERVICES.keys():
            if (location_slug, service_slug) in skip_files:
                skipped += 1
                continue
            
            filename = f'{location_slug}-{service_slug}.json'
            filepath = os.path.join(output_dir, filename)
            
            # Skip if file already exists
            if os.path.exists(filepath):
                skipped += 1
                continue
            
            json_data = generate_json(location_slug, service_slug)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(json_data, f, indent=2, ensure_ascii=False)
            
            print(f'Generated: {filename}')
            generated += 1
    
    print(f'\n=== Summary ===')
    print(f'Generated: {generated}')
    print(f'Skipped: {skipped}')

if __name__ == '__main__':
    main()


