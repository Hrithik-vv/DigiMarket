import AdminSidebar from './AdminSidebar';
import '../admin.css';

export default function AdminLayout({ title, actions, children }) {
  return (
    <div className="admin-app">
      <AdminSidebar />
      <main className="admin-main">
        <header className="admin-topbar">
          <h1 className="admin-topbar__title">{title}</h1>
          <div className="admin-topbar__actions">{actions}</div>
        </header>
        <section className="admin-content">{children}</section>
      </main>
    </div>
  );
}
