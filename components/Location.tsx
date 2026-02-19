
"use client";

import React from "react";

export default function Location() {
    return (
        <section id="location" className="py-20 bg-zinc-950 scroll-mt-20 md:scroll-mt-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-5xl font-bold text-center text-white mb-8">My Location</h2>
                <p className="text-center text-zinc-400 text-lg mb-12 max-w-3xl mx-auto">
                    Bubtian Chowk, Lahore, Punjab, Pakistan – Available for in-person meetings,
                    collaborations, or coffee chats!
                </p>
                <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-emerald-900/20">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.776101912!2d74.22776361530292!3d31.39678198141094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901b0b0b0b0b0%3A0x0!2zMzHCsDIzJzQ4LjQiTiA3NMKwMTMnMzkuOSJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    ></iframe>
                </div>
                {/* Hidden test element to confirm rendering */}
                <div className="hidden">LOCATION SECTION TEST</div>
            </div>
        </section>
    );
}
