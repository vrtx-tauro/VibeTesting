
const days = [
    { id: 1, date: '2024-06-06', dayOfWeek: 'Saturday' },
    { id: 2, date: '2024-06-07', dayOfWeek: 'Sunday' },
    { id: 3, date: '2024-06-08', dayOfWeek: 'Monday' },
    { id: 4, date: '2024-06-09', dayOfWeek: 'Tuesday' },
    { id: 5, date: '2024-06-10', dayOfWeek: 'Wednesday' },
    { id: 6, date: '2024-06-11', dayOfWeek: 'Thursday' },
    { id: 7, date: '2024-06-12', dayOfWeek: 'Friday' },
    { id: 8, date: '2024-06-13', dayOfWeek: 'Saturday' },
    { id: 9, date: '2024-06-14', dayOfWeek: 'Sunday' },
    { id: 10, date: '2024-06-15', dayOfWeek: 'Monday' },
    { id: 11, date: '2024-06-16', dayOfWeek: 'Tuesday' },
    { id: 12, date: '2024-06-17', dayOfWeek: 'Wednesday' },
    { id: 13, date: '2024-06-18', dayOfWeek: 'Thursday' },
    { id: 14, date: '2024-06-19', dayOfWeek: 'Friday' }
];

const categories = [
    { id: 1, name: 'Flight', colorClass: 'bg-info text-white' },
    { id: 2, name: 'Train', colorClass: 'bg-success text-white' },
    { id: 3, name: 'Subway', colorClass: 'bg-secondary text-white' },
    { id: 4, name: 'Temple', colorClass: 'bg-warning text-dark' },  
    { id: 5, name: 'Museum', colorClass: 'bg-primary text-white' },
    { id: 6, name: 'Shopping', colorClass: 'bg-danger text-white' },
    { id: 7, name: 'Meal', colorClass: 'bg-success text-white' },
    { id: 8, name: 'OPOI', colorClass: 'bg-dark text-white' },
    { id: 9, name: 'Hotel Check-in', colorClass: 'bg-secondary text-white' },
    { id: 10, name: 'Hotel Check-in', colorClass: 'bg-secondary text-white' },
    { id: 11, name: 'Shrine', colorClass: 'bg-warning text-dark' },
    { id: 12, name: 'Garden', colorClass: 'bg-warning text-dark' },
    { id: 13, name: 'Cool Area', colorClass: 'bg-warning text-dark' },

];


let itinerary = [
    {
        "day": "2024-06-06",
        "category": "Flight",
        "time": "10:35 AM",
        "activity": "Boston to Montreal",
        "detail1": "Flight: AC 751",
        "detail2": "Confirmation: AGVFZ0",
        "detail3": "Terminal B",
        "detail4": "Arrive 6/6/2026 12:00 PM EDT"
    },
    {
        "day": "2024-06-06",
        "category": "Flight",
        "time": "1:05 PM",
        "activity": "Montreal to Narita",
        "detail1": "Flight: AC 5",
        "detail2": "Confirmation: AGVFZ0",
        "detail3": "",
        "detail4": "Arrive 6/7/2026 3:25 PM GMT+9"
    },
    {
        "day": "2024-06-07",
        "category": "Train",
        "time": "5:00 PM",
        "activity": "Take Narita Express to Shinjuku",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": "Arrive 6/7/2026 6:30 PM GMT+9"
    },
    {
        "day": "2024-06-07",
        "category": "Hotel Check-in",
        "time": "7:00 PM",
        "activity": "Hotel Groove Shinjuku",
        "detail1": "1-29-1, Kabukicho, Shinjuku-ku, Tokyo Japan 160-0021",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-07",
        "category": "Cool Area",
        "time": "8:00 PM",
        "activity": "Explore Shinjuku",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-08",
        "category": "Shrine",
        "time": "",
        "activity": "Senso-ji",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-08",
        "category": "Shopping",
        "time": "",
        "activity": "Nakamise-dori",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-08",
        "category": "Garden",
        "time": "",
        "activity": "Ueno Park",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-08",
        "category": "Museum",
        "time": "",
        "activity": "Tokyo National Museum",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-08",
        "category": "Museum",
        "time": "",
        "activity": "teamLab Borderless",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    },
    {
        "day": "2024-06-06",
        "category": "Other Point of Interest",
        "time": "",
        "activity": "",
        "detail1": "",
        "detail2": "",
        "detail3": "",
        "detail4": ""
    }
]

/*
[];
// Reads a CSV file (relative path) and parses it into an array of itinerary objects
// CSV may contain a header row. Expected columns (if no header):
// dayId,categoryId,time,activity,detail1,detail2,detail3,detail4

// Reads a CSV file and populates `itinerary_new` array.
// If the CSV has a header row, column names will be used as object keys.
// Otherwise the default columns are: day,category,time,activity,detail1,detail2,detail3,detail4

function readItineraryNew(csvPath = 'itinerary.csv') {
    return fetch(csvPath)
        .then(resp => {
            if (!resp.ok) throw new Error('Failed to fetch ' + csvPath);
            return resp.text();
        })
        .then(text => {
            const rows = [];
            const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
            for (let rawLine of lines) {
                if (rawLine.trim() === '') continue;
                const fields = [];
                let field = '';
                let inQuotes = false;
                for (let i = 0; i < rawLine.length; i++) {
                    const ch = rawLine[i];
                    if (ch === '"') {
                        if (inQuotes && rawLine[i+1] === '"') { field += '"'; i++; }
                        else inQuotes = !inQuotes;
                    } else if (ch === ',' && !inQuotes) {
                        fields.push(field);
                        field = '';
                    } else {
                        field += ch;
                    }
                }
                fields.push(field);
                rows.push(fields);
            }

            if (rows.length === 0) { itinerary_new = []; return itinerary_new; }

            const first = rows[0];
            const hasHeader = first.some(cell => /[A-Za-z]/.test(cell));
            const defaultCols = ['day','category','time','activity','detail1','detail2','detail3','detail4'];
            const colNames = hasHeader ? first.map(h => h.trim()) : defaultCols;
            const dataRows = hasHeader ? rows.slice(1) : rows;

            itinerary_new = dataRows.map(cols => {
                const obj = {};
                for (let i = 0; i < colNames.length; i++) {
                    const key = colNames[i];
                    obj[key] = (cols[i] !== undefined) ? cols[i].trim() : '';
                }
                // ensure default keys exist
                defaultCols.forEach(k => { if (!(k in obj)) obj[k] = ''; });
                return obj;
            });

            return itinerary_new;
        });
}
*/
