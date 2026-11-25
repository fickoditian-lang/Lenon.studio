"use client";

import { useState } from "react";
import { 
  ClipboardList, User, Camera, CheckCircle2, 
  Menu, X, Plus, Clock, CheckCircle, Bell, Globe, MessageSquare, ArrowRight 
} from "lucide-react";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("Tasks");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName, setUserName] = useState("Staff Ficko Ditian");
  const [profileEmail, setProfileEmail] = useState("staff@lenon.com");
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80");

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const [messages, setMessages] = useState([
    { id: 1, sender: "Admin Sistem", text: "Tolong selesaikan laporan shift siang hari ini.", time: "15 menit lalu", unread: true },
    { id: 2, sender: "Manager Operasional", text: "Pengecekan kualitas material pagi disetujui.", time: "2 jam lalu", unread: false },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, title: "Pengecekan Kualitas Material Pagi", status: "Selesai", time: "08:00 WIB", category: "Inspeksi" },
    { id: 2, title: "Input Data Laporan Shift Siang", status: "Pending", time: "13:00 WIB", category: "Administrasi" },
    { id: 3, title: "Koordinasi Logistik Gudang Utama", status: "Pending", time: "15:30 WIB", category: "Logistik" },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: t.status === "Selesai" ? "Pending" : "Selesai" } : t));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks([
      {
        id: tasks.length + 1,
        title: newTaskTitle,
        status: "Pending",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " WIB",
        category: "Operasional"
      },
      ...tasks
    ]);
    setNewTaskTitle("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const completedCount = tasks.filter(t => t.status === "Selesai").length;
  const pendingCount = tasks.filter(t => t.status === "Pending").length;

  return (
    <div className="flex h-screen bg-[#FAFAFA] text-slate-900 overflow-hidden font-sans relative">
      
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs md:hidden" />
      )}

      {/* SIDEBAR HITAM PUTIH MINIMALIS */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 md:static md:translate-x-0 flex flex-col justify-between ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div>
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h1 className="text-base font-black tracking-[0.25em] text-slate-900">LENON</h1>
              <p className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">Staff Workspace</p>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400"><X size={18} /></button>
          </div>

          <nav className="p-4 space-y-1 text-xs font-semibold text-slate-600">
            <button onClick={() => { setActiveTab("Tasks"); setSidebarOpen(false); }} className={`flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl transition ${activeTab === "Tasks" ? "bg-black text-white shadow-sm" : "hover:bg-slate-100"}`}>
              <ClipboardList size={16} /> Tugas & Aktivitas
            </button>
            <button onClick={() => { setActiveTab("Profile"); setSidebarOpen(false); }} className={`flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl transition ${activeTab === "Profile" ? "bg-black text-white shadow-sm" : "hover:bg-slate-100"}`}>
              <User size={16} /> Pengaturan Profil
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={profileImage} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
            <div>
              <p className="text-xs font-bold text-slate-900 truncate w-28">{userName}</p>
              <p className="text-[10px] text-emerald-600 font-semibold">Staff Aktif</p>
            </div>
          </div>
          <a href="/login" className="text-slate-400 hover:text-black transition" title="Keluar">
            <ArrowRight size={16} />
          </a>
        </div>
      </aside>

      {/* MAIN CONTAINER */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto relative">
        
        {/* TOPBAR */}
        <header className="h-16 bg-white border-b border-slate-200/80 flex items-center justify-between px-6 md:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-3 w-full max-w-md">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden text-slate-600"><Menu size={20} /></button>
            <div className="relative w-full">
              <input type="text" placeholder="Search tasks, reports, instructions..." className="w-full bg-[#FAFAFA] border border-slate-200 rounded-xl px-4 py-1.5 text-xs focus:bg-white focus:outline-none focus:border-black transition" />
            </div>
          </div>

          <div className="flex items-center gap-3 pl-4">
            <button className="px-3 py-1.5 bg-black text-white rounded-lg text-xs font-semibold">Compact</button>
            <div className="h-4 w-[1px] bg-slate-200 mx-1"></div>
            <Globe size={16} className="text-slate-500 cursor-pointer" />
            <span className="text-xs font-bold text-slate-700">EN</span>
            
            {/* NOTIFIKASI LONCENG INTERAKTIF */}
            <div className="relative">
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-1.5 rounded-lg hover:bg-slate-100 transition cursor-pointer"
              >
                <Bell size={18} className="text-slate-600" />
                {hasNewMessage && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white animate-pulse"></span>
                )}
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl border border-slate-200 shadow-xl p-4 z-50">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} className="text-black" />
                      <h4 className="text-xs font-bold text-slate-900">Pesan dari Admin</h4>
                    </div>
                    <button onClick={() => setHasNewMessage(false)} className="text-[10px] text-slate-400 hover:text-black font-semibold">
                      Tandai dibaca
                    </button>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto my-2">
                    {messages.map((m) => (
                      <div key={m.id} className="py-2.5">
                        <p className="text-xs font-bold text-slate-800">{m.sender}</p>
                        <p className="text-[11px] text-slate-500">{m.text}</p>
                        <span className="text-[9px] text-slate-400">{m.time}</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setNotificationsOpen(false)} className="w-full mt-2 py-2 bg-black text-white rounded-xl text-xs font-semibold">
                    Tutup
                  </button>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* CONTENT */}
        <div className="p-6 md:p-8 max-w-6xl w-full mx-auto space-y-6">
          
          {activeTab === "Tasks" && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">STAFF WORKSPACE</p>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Daily Task Checklist</h2>
                </div>
                <div className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-xl">
                  Shift: Operasional Pagi
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-black text-white p-5 rounded-2xl shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-slate-300">Total Tasks</span>
                    <h3 className="text-2xl font-black mt-1">{tasks.length}</h3>
                  </div>
                  <ClipboardList size={22} className="text-slate-400" />
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-slate-400">Completed</span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{completedCount}</h3>
                  </div>
                  <CheckCircle size={22} className="text-slate-900" />
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-slate-400">Pending</span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{pendingCount}</h3>
                  </div>
                  <Clock size={22} className="text-slate-400" />
                </div>
              </div>

              {/* FORM TAMBAH TUGAS */}
              <form onSubmit={handleAddTask} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Tambah tugas baru operasional..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <button type="submit" className="w-full bg-black text-white py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2 cursor-pointer">
                    <Plus size={14} /> Add Checklist
                  </button>
                </div>
              </form>

              {/* LIST TUGAS */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs space-y-3">
                <h3 className="font-bold text-slate-800 text-sm mb-4">Daftar Pekerjaan</h3>
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTaskStatus(task.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${
                      task.status === "Selesai"
                        ? "bg-slate-50 border-slate-200 text-slate-400 line-through"
                        : "bg-white border-slate-200 hover:border-black text-slate-900 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className={task.status === "Selesai" ? "text-black" : "text-slate-300"} />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold">{task.title}</p>
                          <span className="text-[9px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">{task.category}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">Jadwal: {task.time}</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                      task.status === "Selesai" ? "bg-black text-white" : "bg-slate-100 text-slate-700"
                    }`}>
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          )}

          {activeTab === "Profile" && (
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-2xs max-w-xl space-y-6">
              <h3 className="font-bold text-slate-900 text-sm">Pengaturan Profil Staff</h3>
              <div className="flex items-center gap-6 py-4 border-y border-slate-100">
                <div className="relative">
                  <img src={profileImage} alt="Foto" className="w-16 h-16 rounded-full object-cover ring-2 ring-slate-100 shadow" />
                  <label htmlFor="user-photo" className="absolute bottom-0 right-0 bg-black text-white p-1.5 rounded-full cursor-pointer shadow hover:bg-slate-800 transition"><Camera size={12} /></label>
                  <input id="user-photo" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{userName}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Divisi Operasional Lapangan</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap</label>
                  <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2 text-xs focus:border-black focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Akses</label>
                  <input type="email" value={profileEmail} onChange={(e) => setProfileEmail(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2 text-xs focus:border-black focus:outline-none" />
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}