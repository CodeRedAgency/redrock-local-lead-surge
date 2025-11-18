#!/usr/bin/env python3
"""
Regenerate Spanish JSON files with EXACT structure from English originals
Ensures all neighborhoods, FAQs, testimonials, etc. are preserved
"""

import json
import os

def translate_value(value, context=""):
    """Translate a value, preserving structure"""
    if isinstance(value, dict):
        return {k: translate_value(v, context=f"{context}.{k}") for k, v in value.items()}
    elif isinstance(value, list):
        return [translate_value(item, context) for item in value]
    elif isinstance(value, str):
        # Don't translate URLs, IDs, slugs, etc.
        if context.endswith('.href') or context.endswith('.bookingUrl') or context.endswith('.calculatorUrl'):
            return value.replace('/en/', '/es/')
        if context.endswith('.id') or context.endswith('.slug') or context.endswith('.icon') or context.endswith('.loginUrl'):
            return value
        
        # For now, return as-is - we'll use a proper translation service or manual translations
        # This ensures structure is preserved
        return value
    else:
        return value

def regenerate_spanish_file(english_filepath, spanish_filepath):
    """Regenerate Spanish file from English with exact structure"""
    try:
        # Read English file
        with open(english_filepath, 'r', encoding='utf-8') as f:
            english_data = json.load(f)
        
        # Start with exact copy
        spanish_data = json.loads(json.dumps(english_data))
        
        # Only update URLs
        def update_urls(obj):
            if isinstance(obj, dict):
                for key, val in obj.items():
                    if key in ['href', 'bookingUrl', 'calculatorUrl'] and isinstance(val, str):
                        obj[key] = val.replace('/en/', '/es/')
                    else:
                        update_urls(val)
            elif isinstance(obj, list):
                for item in obj:
                    update_urls(item)
        
        update_urls(spanish_data)
        
        # Write Spanish file (structure preserved, URLs updated)
        # Note: Content translation will need to be done separately or manually
        with open(spanish_filepath, 'w', encoding='utf-8') as f:
            json.dump(spanish_data, f, indent=2, ensure_ascii=False)
        
        return True
    except Exception as e:
        print(f"Error processing {english_filepath}: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    """Regenerate all Spanish JSON files with exact structure"""
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
    
    regenerated = 0
    errors = 0
    
    for location_slug in locations:
        for service_slug in services:
            english_filename = f'{location_slug}-{service_slug}.json'
            spanish_filename = f'{location_slug}-{service_slug}-es.json'
            
            english_filepath = os.path.join(data_dir, english_filename)
            spanish_filepath = os.path.join(data_dir, spanish_filename)
            
            if not os.path.exists(english_filepath):
                continue
            
            if regenerate_spanish_file(english_filepath, spanish_filepath):
                regenerated += 1
            else:
                errors += 1
    
    print(f'\n=== Summary ===')
    print(f'Regenerated: {regenerated}')
    print(f'Errors: {errors}')
    print('\nNote: Files now have exact structure. Translation of content needs to be done.')

if __name__ == '__main__':
    main()


