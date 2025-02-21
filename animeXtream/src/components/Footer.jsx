import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>© 2021, All rights reserved</p>
                <p className="mt-2">Follow us on:</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
