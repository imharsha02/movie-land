import SideNav from '@/app/ui/dashboard/SideNav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen'>
      <div>
        <SideNav />
      </div>
      <div className='pt-4 w-full pl-10'>{children}</div>
    </div>
  );
}