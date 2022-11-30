import '/node_modules/flag-icons/css/flag-icons.min.css';

const Avatar = ({ countryCode, wikiLink }) => {
  return (
    <a
      className={`mx-auto h-32 w-32 flex-shrink-0  fib fi-${countryCode.toLowerCase()}`}
      href={wikiLink}
    />
  );
};

export default Avatar;
