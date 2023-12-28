import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "E-Commerce Shop Admin",
  description: "E-Commerce Shop Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
