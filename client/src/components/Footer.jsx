import GITHUB_ICON from '../assets/github.png';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='Footer'>
      <h1>Footer</h1>
      <div className='Footer__Links'>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/leonardporteria/reactjs-nodejs-template.git'
        >
          <img src={GITHUB_ICON} alt='GITHUB ICON' />
        </a>
      </div>
      <p>
        2023 |{' '}
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/leonardporteria'
        >
          Leonard Porteria
        </a>
      </p>
    </div>
  );
};

export default Footer;
