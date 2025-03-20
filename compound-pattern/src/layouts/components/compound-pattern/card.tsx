import { createContext, ReactNode, useContext } from "react";

interface CardContextProps {
  value: string;
}

const CardInitialContext: CardContextProps = {
  value: "",
};

const CardContext = createContext<CardContextProps>(CardInitialContext);

interface CardHeaderProps {
  children: ReactNode;
}

interface CardBodyProps {
  children: ReactNode;
}

interface CardFooterProps {
  children: ReactNode;
}

interface CardProps {
  children: ReactNode;
  value?: string;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  const { value } = useContext(CardContext);
  return (
    <div>
      {children}
      {value}
    </div>
  );
};

const CardBody = ({ children }: CardBodyProps) => {
  return <div>{children}</div>;
};

const CardFooter = ({ children }: CardFooterProps) => {
  return <div>{children}</div>;
};

const Card = ({ children, value = "" }: CardProps) => {
  return (
    <CardContext.Provider value={{ value: value }}>
      {children}
    </CardContext.Provider>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card as typeof Card & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};
