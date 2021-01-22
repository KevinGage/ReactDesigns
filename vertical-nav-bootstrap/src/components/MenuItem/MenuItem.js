function MenuItem({ icon, label, active }) {
  return (
    <div className={`menu-item ${active ? "active" : ""}`}>
      {icon} <span>{label}</span>
    </div>
  );
}

export default MenuItem;
