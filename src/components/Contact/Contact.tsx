import React from 'react';
import styled from './Contact.module.scss';
import { ContactInfo } from './ContactInfo/ContactInfo';

const contactInfoData = [
  {
    svg: 'mail',
    title: 'Location:',
    info: 'A108 Adam Street, New York, NY 535022',
  },
  { svg: 'phone', title: 'Email:', info: 'info@example.com' },
  { svg: 'geo', title: 'Call:', info: '+1 5589 55488 55s' },
];

export const Contact = () => {
  return (
    <section id={'contact'} className={styled.contact}>
      <div className={styled.container}>
        <div className={styled.sectionTitle}>
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className={styled.row} data-aos="fade-in">
          <div className={styled.rowWrapperMap}>
            <div className={styled.info}>
              {contactInfoData.map((item, index) => {
                return <ContactInfo key={index} {...item} />;
              })}
              {/*--------------Map------------------*/}
              {/*<iframe*/}
              {/*    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"*/}
              {/*    frameBorder="0" style="border:0; width: 100%; height: 290px;" allowFullScreen></iframe>*/}
              {/*--------------Map------------------*/}
            </div>
          </div>

          <div className={styled.rowWrapperForm}>
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className={styled.form}
            >
              <div className={styled.formWrapper}>
                <div className={styled.formGroup}>
                  <label htmlFor="name">Your Name</label>

                  <input
                    type="text"
                    name="name"
                    className={styled.formControl}
                    id="name"
                    required
                  />
                </div>
                <div className={styled.formGroup}>
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className={styled.formControl}
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className={styled.formGroup}>
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className={styled.formControl}
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className={styled.formGroup}>
                <label htmlFor="name">Message</label>
                <textarea
                  className={styled.formControl}
                  name="message"
                  rows={10}
                  required
                ></textarea>
              </div>
              <div className={styled.buttonWrapper}>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
