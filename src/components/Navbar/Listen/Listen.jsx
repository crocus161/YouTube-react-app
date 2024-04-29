import styles from './Listen.module.scss';
import MicroIcon from '../../../assets/icons/microphone.svg?react';
import React, { useState, useEffect } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let mic;

if(SpeechRecognition) {
    mic = new SpeechRecognition();
    mic.continuous = true;
    mic.interimResults = true;
    mic.lang = 'en-US';
}



const Listen = React.memo(({ setSearchValue }) => {

    const [isListening, setIsListening] = useState(false);

    useEffect(() => {

        const handleListen = () => {
            if(!SpeechRecognition) return;

            if (isListening) mic.start();
            else mic.stop();
    
            mic.onsoundend = () => {
                mic.stop();
                setIsListening(false);
            }
            
    
            mic.onresult = e => {
                const transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');
    
                setSearchValue(transcript);
                
                mic.onerror = event => {
                    console.log(event.error)
                }
            }
        }

        handleListen();
    }, [isListening, setSearchValue])

    if(!SpeechRecognition) {
        return null;
    }

    return (
        <button className={styles.icon__wrapper} 
            onClick={() => setIsListening(!isListening)}
        >
            <MicroIcon className={`${styles.icon} ${isListening ? styles.active : ''}`} />
        </button>
    );
})

export default Listen;