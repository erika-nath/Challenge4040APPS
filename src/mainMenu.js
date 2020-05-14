module.exports = [
    {
        label: 'Projects',
        submenu:[
            {label: 'projects'},
        ]
    },
    {
        label: 'Tasks',
        submenu:[
            {label:'Tasks'}
        ]
    },
    {
        label: 'Users',
        submenu:[
            {label:'Users'}
        ]
    },
    {
        label: 'Reports',
        submenu:[
            {label:'Reports'}
        ]
    },
    {
        label: 'Task time',
        enabled: false,
        click: ()  => { console.log ('Hello from Main Menu')},
        acelerator: 'Shift+Alt+G'
    },
]