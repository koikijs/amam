# sigure

## Pages

### /:lang
Display todays attendance in default.

### /:lang?date=2015-12-01
Display specified date attendance

### /:lang?team=uxd
Display specified team attendance

### Spec
- Person
  - Country
  - Name
  - Tags 
  - Icon
  - Default attendance time


- Attendance
  - Start Date with time ( UTC )
  - End Date with time ( UTC )
  - Reason Type ( Train / conference / Business trip / etc... )


- I/F
  - /tags?q=
    - id :
    - name :
  - /persons?tags=[]
    - ```{["id" : 
        , "Country" : "JP"
        , "City" : "TYO"
        , "Name"
        , "Tags"
        , "Icon"
       ]}```

  
  - /attendances?personId=[]&dateFrom=YYYY-MM-DDZ&dateTo=YYYY-MM-DDZ
    - id
    - personId
    - Start Date with time ( UTC )
    - End Date with time ( UTC )
    - Reason Type ( Business trip / Work From Home etc... )
    - "Country" : "JP"
    - "City" : "TYO"
