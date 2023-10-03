import data from './Section.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section className={data.section}>
      <h2 className={data.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
