import { InMemoryDbService } from 'angular-in-memory-web-api';
/**
 *This is sample DB class which stores sample json data 
 */

 export class InMemoryDataService implements InMemoryDbService {

createDb() {

    let data = [
        {
    "data":
    [  
        {  
            "data":{  
                "name":"Documents",
                "size":"75kb",
                "type":"Folder"
            },
            "children":[
                {  
                    "data":{  
                        "name":"Work",
                        "size":"55kb",
                        "type":"Folder"
                    },
                    "children":[  
                        {  
                            "data":{  
                                "name":"Expenses.doc",
                                "size":"30kb",
                                "type":"Document"
                            }
                        },
                        {  
                            "data":{  
                                "name":"Resume.doc",
                                "size":"25kb",
                                "type":"Resume"
                            }
                        }
                    ]
                },
                {  
                    "data":{  
                        "name":"Home",
                        "size":"20kb",
                        "type":"Folder"
                    },
                    "children":[  
                        {  
                            "data":{  
                                "name":"Invoices",
                                "size":"20kb",
                                "type":"Text"
                            }
                        }
                    ]
                }
            ]
        },
        {  
            "data":{  
                "name":"Pictures",
                "size":"150kb",
                "type":"Folder"
            },
            "children":[  
                {  
                    "data":{  
                        "name":"barcelona.jpg",
                        "size":"90kb",
                        "type":"Picture"
                    }
                },
                {  
                    "data":{  
                        "name":"primeui.png",
                        "size":"30kb",
                        "type":"Picture"
                    }
                },
                {  
                    "data":{  
                        "name":"optimus.jpg",
                        "size":"30kb",
                        "type":"Picture"
                    }
                }
            ]
        }
    ]
}

        
    ];
 return {data};
}


 }