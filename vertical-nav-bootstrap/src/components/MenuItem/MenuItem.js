function MenuItem({ icon, label, location, active }) {
  return (
    <div className="menu-item">
      <a href={location} className={`${active ? "active" : ""}`}>
        {icon} <span>{label}</span>
      </a>
    </div>
  );
}

export default MenuItem;
