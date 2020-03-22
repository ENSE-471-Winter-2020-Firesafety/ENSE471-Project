import { call, bonfire, home, person } from 'ionicons/icons';

export interface QuestionType {
    text: string;
    icon: string;
    color?: string;
}

export const Questions: QuestionType[] = [
    {
        text: '911 What\'s your Emergency?',
        icon: bonfire,
        color: 'orange',
    },
    {
        text: 'Where is the Emergency?',
        icon: home,
    },
    {
        text: 'What is your name?',
        icon: person,
    },
    {
        text: 'What is your phone number?',
        icon: call,
    }
]
