export interface SafetyTipType {
    name: string;
    usefulQuestions: string[];
}

// list of 911 safety tips taken from https://www.saskatchewan.ca/residents/emergency/sask911#911-safety-tips
// should be prefaced with: You may be asked the following questions by a 911 operator, depending on the situation:
export const SafetyTips: SafetyTipType[] = [
    {
        name: 'Police emergencies',
        usefulQuestions: [
            "Are you in danger, or is someone's life in danger?",
            "If a crime was committed, can you provide a description of the offender?",
            "Are there any weapons involved?",
        ]
    },
    {
        name: 'Medical emergencies',
        usefulQuestions: [
            "Is the person conscious? Breathing? What else can you tell about the person's condition?",
            "Is the person able to tell you anything about the problem he/she is experiencing?",
            "Are you able to provide emergency first aid? Is it safe to do so?",
        ]
    },
    {
        name: 'Fire emergencies',
        usefulQuestions: [
            "Are you in danger?",
            "Is anyone trapped or injured?",
            "Are smoke and flames visible?",
            "What type of fire are you reporting?",
        ]
    },
    {
        name: 'Rescue situations',
        usefulQuestions: [
            "How many people are trapped or injured or in need of rescue?",
            "If the situation involves vehicles, what types of vehicles are involved and how many?",
            "Are there any other hazards present?",
            "Is there a risk of fire?",
        ]
    },
    {
        name: 'Dangerous goods situations',
        usefulQuestions: [
            "Is fuel or other dangerous cargo leaking?",
            "Is there a sign with an identification number or symbol on the side, front or back of the vehicle or vehicles? If so, can you identify what the symbol is?",
        ]
    },
    {
        name: 'Prank calls to 911',
        usefulQuestions: [
            "Prank calls are traceable and will be investigated. They are a serious abuse of the Sask911 system.",
            "All incoming calls are recorded. The use of profanity or abuse of the telephone system may result in restrictions on phone service, or charges under the Criminal Code.",
            "If emergency vehicles are dispatched for no reason, the prank caller may be liable for the costs involved.",
        ]
    },
]
