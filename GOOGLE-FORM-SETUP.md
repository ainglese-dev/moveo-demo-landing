# Google Form Setup Instructions for MOVEO Booking Form (SIMPLIFIED)

## Overview
This document contains the simplified form fields needed to create a Google Form that integrates with the MOVEO booking form component. We've reduced the form to only 5 essential fields for better user experience and reliable Google Forms integration.

## Form Configuration

### Form Settings
- **Form Title**: "MOVEO - Solicitud de Consulta y Servicios"
- **Form Description**: "Formulario para agendar consultas gratuitas y solicitar información sobre nuestros servicios de salud integral para adultos mayores."
- **Collect email addresses**: No (we collect it manually in the form)
- **Response receipts**: "Never" (to avoid conflicts)

## Form Fields (in order)

### Section 1: Información de Contacto
**Section Title**: "Información de Contacto"
**Section Description**: "Datos básicos para ponernos en contacto contigo"

1. **Nombre completo** (FIELD_ID_NOMBRE)
   - Type: Short answer text
   - Required: Yes
   - Placeholder: "Ej: María García López"

2. **Correo electrónico** (FIELD_ID_EMAIL)
   - Type: Short answer text
   - Required: Yes
   - Input validation: Email
   - Placeholder: "ejemplo@email.com"

3. **Teléfono/WhatsApp** (FIELD_ID_TELEFONO)
   - Type: Short answer text
   - Required: Yes
   - Placeholder: "+57 300 123 4567"

### Section 2: Servicio de Interés
**Section Title**: "Servicio de Interés"
**Section Description**: "¿Qué tipo de servicio te interesa?"

4. **Tipo de servicio de interés** (FIELD_ID_TIPO_SERVICIO)
   - Type: Multiple choice
   - Required: Yes
   - Options (IMPORTANT - Use these exact values):
     - evaluacion-gratuita
     - clases-grupales
     - clases-domicilio
     - programa-personalizado
     - consulta-familiar
     - solo-informacion

### Section 3: Mensaje Adicional
**Section Title**: "Mensaje Adicional"
**Section Description**: "Cuéntanos más sobre tu situación"

5. **Cuéntanos más sobre tu situación o pregúntanos lo que necesites** (FIELD_ID_MENSAJE)
   - Type: Paragraph text
   - Required: No
   - Placeholder: "Ej: Mi madre de 75 años necesita mejorar su equilibrio después de una caída..."

### Section 4: Consentimiento
**Section Title**: "Consentimiento y Política de Privacidad"
**Section Description**: ""

6. **Acepto que MOVEO use mis datos de contacto para responder a mi solicitud** (FIELD_ID_CONSENTIMIENTO)
   - Type: Checkboxes
   - Required: Yes
   - Options (IMPORTANT - Use this exact value):
     - acepto-politica-privacidad

## Form Response Settings

### Response Options
- **Collect email addresses**: No (we collect it manually)
- **Limit to 1 response**: No
- **Allow response editing**: Yes
- **Show response summary**: No

### Notification Settings
- **Email notifications for new responses**: Yes
- **Send confirmation receipts to respondents**: No (to avoid conflicts)

### Confirmation Message
Set a custom confirmation message:
```
¡Gracias por tu solicitud!

Hemos recibido tu información y nos pondremos en contacto contigo en menos de 24 horas.

Si necesitas una respuesta más rápida, puedes escribirnos directamente por WhatsApp al +57 314 226 5559.

Equipo MOVEO
```

## What You Need to Provide

After creating the Google Form, please provide:

1. **GOOGLE_FORM_ACTION_URL**: The form submission URL (usually ends with `/formResponse`)
2. **Field IDs**: The unique field IDs for each form field (found in the form's HTML or by inspecting the form)

### Field ID Format
Each field ID will look something like: `entry.1234567890`

Replace these stakeholders in `BookingForm.astro`:
```javascript
const GOOGLE_FORM_ACTION_URL = "{{GOOGLE_FORM_ACTION_URL}}";
const FORM_FIELDS = {
  name: "{{FIELD_ID_NOMBRE}}",
  email: "{{FIELD_ID_EMAIL}}",
  phone: "{{FIELD_ID_TELEFONO}}", 
  serviceType: "{{FIELD_ID_TIPO_SERVICIO}}",
  message: "{{FIELD_ID_MENSAJE}}",
  consent: "{{FIELD_ID_CONSENTIMIENTO}}"
};
```

## How to Get Field IDs

1. Create the Google Form with exactly the 6 fields above
2. **IMPORTANT**: Use the exact option values specified (e.g., `evaluacion-gratuita`, not `Evaluación gratuita inicial`)
3. Open the form in "Preview" mode
4. Right-click and "View Page Source" or "Inspect Element"
5. Search for `entry.` to find all field IDs
6. Match each field name with its corresponding `entry.xxxxxxxxxx` ID

## Additional Notes

- **Essential Fields**: 6 key fields including email for remote session booking
- **Clean Values**: Backend uses URL-safe values (no spaces, accents, or special characters)
- **Reliable Integration**: Minimal encoding reduces Google Forms compatibility issues
- **WhatsApp Fallback**: Direct contact option for urgent requests
- **GDPR Compliant**: Includes necessary consent collection

## Field Mapping Summary (FINAL - CORRECT IDs FROM WORKING URL)

1. **Name** → `entry.1699377430` (text input)
2. **Email** → `entry.932699630` (email input with validation)
3. **Phone** → `entry.925299747` (text input)  
4. **Service Type** → `entry.1475595085` (select with clean values)
5. **Message** → `entry.1992337220` (textarea) ✅ **This was the missing field!**
6. **Consent** → `entry.1632736675` (checkbox with `acepto-politica-privacidad`)

Total fields: 6 (4 required, 2 optional)

## Key Benefits of Simplified Form

✅ **Better UX**: Faster to complete, less overwhelming
✅ **Higher Conversion**: Fewer fields = more submissions  
✅ **Reliable Integration**: Clean values prevent encoding issues
✅ **Essential Data**: Captures all info needed for initial contact