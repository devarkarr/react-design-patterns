import React from "react";

// Card Component
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
}

// Header Component
function CardHeader({ title }: { title: string }) {
  return <h2>{title}</h2>;
}

// Body Component
function CardBody({ content }: { content: string }) {
  return <p>{content}</p>;
}

// Footer Component
function CardFooter({ text }: { text: string }) {
  return <footer>{text}</footer>;
}

export default function CompositionComponent() {
  return (
    <Card>
      <CardHeader title="Card Title" />
      <CardBody content="Card Content" />
      <CardFooter text="Card Footer" />
    </Card>
  );
}
