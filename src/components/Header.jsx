// src/components/Header.jsx (DIPERBAIKI)
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.jsx'; // ⬅️ Pastikan path ini benar

export default function Header() {
    // Ambil darkMode hanya untuk ikon di link Pengaturan
    const { darkMode } = useTheme(); 

    return (
        <header className="main-header">
            <h1>Mini Todo App</h1>
            <nav>
                <Link to="/">Beranda</Link>
                <Link to="/tentang">Tentang</Link>
                
                {/* Ikon Tema di Link Pengaturan */}
                <Link to="/pengaturan">Pengaturan ({darkMode ? '🌙' : '☀️'})</Link> 
            </nav>
        </header>
    );
}