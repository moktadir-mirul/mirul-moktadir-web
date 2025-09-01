import NavBar from '../../Component/NavBar/NavBar';
import './StarBorder.css';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 5,
  children,
  ...rest
}) => {
    console.log(Component);
  return (
    <Component
      className={`nav-bg star-border-container ${className} w-11/12 mx-auto my-5 rounded-full border border-gray-600`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content"><NavBar></NavBar></div>
    </Component>
  );
};

export default StarBorder;
