"use client";

import React, { useState } from 'react';
import { 
  Users, 
  MessageCircle,
} from 'lucide-react';

export default function PostmodernPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Postmodern Psychotherapy</h1>
        <div className="space-y-6 text-gray-700">
          <p>
            Postmodern psychotherapy represents a shift in therapeutic thinking that challenges traditional 
            assumptions about objective truth, stable identities, and universal solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
