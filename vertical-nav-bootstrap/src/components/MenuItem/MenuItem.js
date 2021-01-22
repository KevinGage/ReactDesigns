function MenuItem({ icon, label, location, active }) {
  return (
    <div className={`menu-item ${active ? "active" : ""}`}>
      <a href={location}>
        {icon} <span>{label}</span>
      </a>
    </div>
  );
}

export default MenuItem;
