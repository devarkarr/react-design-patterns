// Recursive Component
export default function TreeNode({
  node,
}: {
  node: { name: string; children: any[] };
}) {
  return (
    <div style={{ marginLeft: "20px" }}>
      <div>{node.name}</div>
      {node.children.map((child, index) => (
        <TreeNode key={index} node={child} />
      ))}
    </div>
  );
}
