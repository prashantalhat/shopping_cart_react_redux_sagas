module.exports = function(url, nock){
	nock(url)
	 	.persist()
		.get('/api/db')
		.reply(200, 
			{
                "today": [
                    {
                    "id": 1,
                    "Name": "Horse race 1",
                    "Events": [
                        { "EventID": 1111 },
                        { "EventID": 1112 },
                        { "EventID": 1113 },
                        { "EventID": 1114 },
                        { "EventID": 1115 },
                        { "EventID": 1116 },
                        { "EventID": 1117 }
                    ]
                    },
                    {
                    "id": 2,
                    "Name": "Horse race 2",
                    "Events": [
                        { "EventID": 1121 },
                        { "EventID": 1122 },
                        { "EventID": 1123 },
                        { "EventID": 1124 },
                        { "EventID": 1125 },
                        { "EventID": 1126 },
                        { "EventID": 1127 }
                    ]
                    }
                ],
                "yesterday": [
                    {
                    "id": 3,
                    "Name": "Horse race 1",
                    "Events": [
                        { "EventID": 1211 },
                        { "EventID": 1212 },
                        { "EventID": 1213 }
                    ]
                    },
                    {
                    "id": 4,
                    "Name": "Horse race 2",
                    "Events": [
                        {"EventID": 1311}
                    ]
                    }
                ],
                "tomorrow": [
                    {
                    "id": 5,
                    "Name": "Horse race 1",
                    "Events": [
                        { "EventID": 1411 },
                        { "EventID": 1412 },
                        { "EventID": 1413 }
                    ]
                    },
                    {
                    "id": 6,
                    "Name": "Horse race 2",
                    "Events": [
                        { "EventID": 1421 }
                    ]
                    }
                ],
                "saturday": [
                    {
                    "id": 7,
                    "Name": "Horse race 1",
                    "Events": [
                        { "EventID": 1511 },
                        { "EventID": 1512 },
                        { "EventID": 1513 }
                    ]
                    },
                    {
                    "id": 8,
                    "Name": "Horse race 2",
                    "Events": [
                        { "EventID": 1521 }
                    ]
                    }
                ]
                }

            );

}