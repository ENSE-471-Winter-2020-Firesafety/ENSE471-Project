import { call, bonfire, home, person } from 'ionicons/icons';

export interface QuestionType {
    text: string;
    icon: string;
    sampleAnswer: string;
}

export const Questions: QuestionType[] = [
    {
        text: '911 What is your Emergency?',
        icon: bonfire,
        sampleAnswer: 'There is a fire at my house.'
    },
    {
        text: 'Where is the Emergency?',
        icon: home,
        sampleAnswer: '1234 Wayfair Crescent'
    },
    {
        text: 'What is your name?',
        icon: person,
        sampleAnswer: 'John Smith'
    },
    {
        text: 'What is your phone number?',
        icon: call,
        sampleAnswer: '306 555 6836'
    },
]
