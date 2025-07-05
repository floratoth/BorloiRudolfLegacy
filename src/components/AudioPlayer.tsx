import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface AudioPlayerProps {
    audioSrc: string;
    imageSrc: string;
    title: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, imageSrc, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
            setProgress(0);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button onClick={handleOpenModal} className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full mt-2">
                <PlayIcon className="h-6 w-6" />
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
                        <button onClick={handleCloseModal} className="absolute top-4 right-4 text-black">
                            <XCircleIcon className="h-6 w-6" />
                        </button>
                        <img src={imageSrc} alt="Modal" className="max-w-full max-h-64 mb-4 rounded-lg" />
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <audio controls ref={audioRef} src={audioSrc} className="w-full mb-2" />
                        <div className="flex items-center justify-center mb-2">
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default AudioPlayer;
