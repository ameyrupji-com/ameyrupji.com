import React from 'react';

import './contact.scss';
import './contact.color.scss';
import './form.scss';
import './form.color.scss';

interface ContactProps {
    contact: {
        'title-light': string;
        'title-strong': string;
        'contact-form': {
            'form-text': string;
            fields: Array<{
                element: string;
                type?: string;
                'css-class': string;
                'css-id': string;
                placeholder: string;
                required?: boolean;
                rows?: number;
                text?: string;
                options?: Array<{
                    value: string;
                    selected: boolean;
                    text: string;
                }>;
            }>;
        };
        'follow-links': Array<{
            url: string;
            'css-class': string;
            handle: string;
        }>;
    };
    app: {
        api_base_url: string;
    };
}

const Contact: React.FC<ContactProps> = ({ contact, app }) => {

    React.useEffect(() => {
        const form = document.getElementById('contact-me-form') as HTMLFormElement;
        const alertBox = document.getElementById('contact-me-form-alerts') as HTMLElement;

        const validateForm = () => {
            let isValid = true;
            const fields = form.querySelectorAll('input, textarea, select');
            fields.forEach((field) => {
                const input = field as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
                const formGroup = input.closest('.form-label-group');
                if (input.required && !input.value.trim()) {
                    isValid = false;
                    formGroup?.classList.add('error');
                    formGroup?.classList.remove('success');
                } else {
                    formGroup?.classList.add('success');
                    formGroup?.classList.remove('error');
                }
            });
            return isValid;
        };

        const handleSubmit = async (event: Event) => {
            event.preventDefault();
            if (!validateForm()) {
                console.log('Form Invalid!');
                return;
            }

            console.log('Form Valid! Submitting form.');
            const submitButton = form.querySelector('#contact-submit-btn') as HTMLButtonElement;
            const spinner = submitButton.querySelector('i') as HTMLElement;
            spinner.style.display = 'inline-block';
            submitButton.disabled = true;

            const formData = new FormData(form);
            const data: Record<string, string> = {};
            formData.forEach((value, key) => {
                data[key] = value.toString();
            });

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    console.log('Contact form successfully submitted!');
                    alertBox.style.display = 'block';
                    alertBox.className = 'alert alert-success';
                    alertBox.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Your message has been successfully sent! I will get back at my earliest convenience.';
                } else {
                    throw new Error('Error submitting the form');
                }
            } catch (error) {
                console.error('Contact form errored!', error);
                alertBox.style.display = 'block';
                alertBox.className = 'alert alert-danger';
                alertBox.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Error sending your message! I have taken a note of this and will try to fix this ASAP.';
            } finally {
                spinner.style.display = 'none';
                submitButton.disabled = false;
                form.reset();
                setTimeout(() => {
                    alertBox.style.display = 'none';
                }, 4000);
            }
        };

        form.addEventListener('submit', handleSubmit);

        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, []);
    
    return (
        <div className="container-fluid" id="contact-main">
            <div className="container-fluid" id="map"></div>
            <div className="container">
                <div className="row container-title" id="timeline-title" data-aos="fade-down">
                    <div className="col-md-12 text-center">
                        <h1 className="title">
                            {contact['title-light']} <span className="title-strong">{contact['title-strong']}</span>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-12">
                        <div id="contact-me-form-alerts" className="alert"></div>
                    </div>
                </div>
                <div className="row" data-aos="zoom-out-up" data-aos-anchor-placement="top-bottom">
                    <div className="col-md-8 col-lg-8 col-xl-6 offset-xl-1 col-12">
                        <div className="text-center">
                            <h2 className="title">
                                Contact <span className="title-strong">Me</span>
                            </h2>
                        </div>
                        <form id="contact-me-form" method="post" action={`${app.api_base_url}/email`}>
                            <p className="text-center">{contact['contact-form']['form-text']}</p>
                            {contact['contact-form'].fields.map((field, index) => {
                                if (field.element === 'input') {
                                    return (
                                        <div className="form-label-group" key={index}>
                                            <input
                                                type={field.type}
                                                className={field['css-class']}
                                                id={field['css-id']}
                                                name={field['css-id']}
                                                placeholder={field.placeholder}
                                                required={field.required}
                                            />
                                            <label htmlFor={field['css-id']}>{field.placeholder}</label>
                                        </div>
                                    );
                                } else if (field.element === 'textarea') {
                                    return (
                                        <div className="form-label-group" key={index}>
                                            <textarea
                                                className={field['css-class']}
                                                id={field['css-id']}
                                                placeholder={field.placeholder}
                                                rows={field.rows}
                                                required={field.required}
                                            ></textarea>
                                            <label htmlFor={field['css-id']}>{field.placeholder}</label>
                                        </div>
                                    );
                                } else if (field.element === 'button') {
                                    return (
                                        <button className={field['css-class']} type={field.type} id={field['css-id']} key={index}>
                                            <i className="fas fa-circle-notch fa-spin"></i>
                                            {field.text}
                                        </button>
                                    );
                                } else if (field.element === 'select') {
                                    return (
                                        <div className="form-label-group" key={index}>
                                            <select className={field['css-class']} id={field['css-id']}>
                                                {field.options.map((option, idx) => (
                                                    <option value={option.value} key={idx}>
                                                        {option.text}
                                                    </option>
                                                ))}
                                            </select>
                                            <label htmlFor={field['css-id']}>{field.placeholder}</label>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </form>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4 offset-xl-1 col-12" id="contact-follow">
                        <div className="text-center">
                            <h2 className="title">
                                Follow <span className="title-strong">Me</span>
                            </h2>
                        </div>
                        <ul id="follow-me">
                            {contact['follow-links'].map((link, index) => (
                                <li key={index}>
                                    <a href={link.url}>
                                        <i className={`fab ${link['css-class']} fa-2x`}></i>
                                        <span className="handles">{link.handle}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;