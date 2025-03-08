const dateTime = new Date().toLocaleString();


const Footer = () => {
  return (
    <>
      <div className='footer-fixed'>{dateTime} - Kraken</div>
    </>
  );
};

export default Footer;
