'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [expandedMenus, setExpandedMenus] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleMenu = (key: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-2xl font-bold mb-6">Wade Jen</div>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="hover:text-slate-300 transition">
              • Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-slate-300 transition">
              • About
            </Link>
          </li>
          <li>
            <button
              onClick={() => toggleMenu('eis')}
              className="w-full text-left hover:text-slate-300 transition flex items-center"
            >
              • Eis Heauton {expandedMenus['eis'] ? '▼' : '▶'}
            </button>
            {expandedMenus['eis'] && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link
                    href="/eis-heauton/unity"
                    className="hover:text-slate-300 transition"
                  >
                    • 合一
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eis-heauton/freedom"
                    className="hover:text-slate-300 transition"
                  >
                    • 自由
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleMenu('psychotherapy')}
              className="w-full text-left hover:text-slate-300 transition flex items-center"
            >
              • Psychotherapy {expandedMenus['psychotherapy'] ? '▼' : '▶'}
            </button>
            {expandedMenus['psychotherapy'] && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link
                    href="/psychotherapy/person-centered"
                    className="hover:text-slate-300 transition"
                  >
                    • Person Centered Approach
                  </Link>
                </li>
                <li>
                  <Link
                    href="/psychotherapy/reality-therapy"
                    className="hover:text-slate-300 transition"
                  >
                    • Reality Therapy
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/group-therapy"
              className="hover:text-slate-300 transition"
            >
              • Group therapy
            </Link>
          </li>
          <li>
            <button
              onClick={() => toggleMenu('project')}
              className="w-full text-left hover:text-slate-300 transition flex items-center"
            >
              • Project {expandedMenus['project'] ? '▼' : '▶'}
            </button>
            {expandedMenus['project'] && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link
                    href="/project/male-sexual-minority"
                    className="hover:text-slate-300 transition"
                  >
                    • Group Therapy｜Male Sexual Minority
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/academic"
              className="hover:text-slate-300 transition"
            >
              • Academic
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
