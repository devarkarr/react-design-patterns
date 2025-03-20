import React, { ComponentType } from "react";

interface WrappedComponentProps {
  isAuthenticated?: boolean;
}

export const withAuth = <P extends WrappedComponentProps>(
  WrappedComponent: ComponentType<P>
) => {
  const WithAuth: React.FC<P> = (props) => {
    return <WrappedComponent {...props} isAuthenticated={true} />;
  };

  return WithAuth;
};

export const Dashboard: React.FC<WrappedComponentProps> = ({
  isAuthenticated,
}) => {
  return (
    <div>
      Welcome to the Dashboard! Authenticated: {isAuthenticated?.toString()}
    </div>
  );
};
