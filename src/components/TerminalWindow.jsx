export default function TerminalWindow({ title, children, className = "" }) {
  return (
    <div className={`term-window ${className}`}>
      <div className="term-titlebar">
        <div className="term-dots">
          <span className="dot dot-red" />
          <span className="dot dot-amber" />
          <span className="dot dot-teal" />
        </div>
        {title && <span className="term-title mono">{title}</span>}
      </div>
      <div className="term-body">{children}</div>
    </div>
  );
}
