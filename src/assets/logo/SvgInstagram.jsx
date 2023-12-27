const SvgInstagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-label="Instagram"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect id="instagram_svg__b" width={512} height={512} rx="15%" />
    <use xlinkHref="#instagram_svg__b" fill="url(#instagram_svg__a)" />
    <use xlinkHref="#instagram_svg__b" fill="url(#instagram_svg__c)" />
    <radialGradient id="instagram_svg__a" cx={0.4} cy={1} r={1}>
      <stop offset={0.1} stopColor="#fd5" />
      <stop offset={0.5} stopColor="#ff543e" />
      <stop offset={1} stopColor="#c837ab" />
    </radialGradient>
    <linearGradient id="instagram_svg__c" x2={0.2} y2={1}>
      <stop offset={0.1} stopColor="#3771c8" />
      <stop offset={0.5} stopColor="#60f" stopOpacity={0} />
    </linearGradient>
    <g fill="none" stroke="#fff" strokeWidth={30}>
      <rect width={308} height={308} x={102} y={102} rx={81} />
      <circle cx={256} cy={256} r={72} />
      <circle cx={347} cy={165} r={6} />
    </g>
  </svg>
);
export default SvgInstagram;
