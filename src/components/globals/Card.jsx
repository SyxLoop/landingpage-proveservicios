const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col transition-all hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Image = ({ src, alt, className = "", ...props }) => {
  return (
    <div className={`relative w-full h-48 overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        {...props}
      />
    </div>
  );
};

const Body = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-5 flex-1 flex flex-col gap-3 ${className}`} {...props}>
      {children}
    </div>
  );
};

const Title = ({ children, className = "", ...props }) => {
  return (
    <h3
      className={`text-xl font-bold text-gray-800 leading-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

const Text = ({ children, className = "", ...props }) => {
  return (
    <p
      className={`text-gray-600 text-sm leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

const Footer = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`p-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Image = Image;
Card.Body = Body;
Card.Title = Title;
Card.Text = Text;
Card.Footer = Footer;

export default Card;
