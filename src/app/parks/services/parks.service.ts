import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParksService {
  constructor(private http: HttpClient) { }
  getAllParks(): Observable<any> {
    // return this.http.get<Park[]>(`${env.SERVER_URL}/park/`);
    return of(
      [
        {
          segments: [
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '71337c6d-f185-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_parking_chemin_du_moulon',
              name: '0',
              polygon: [
                {
                  x: 2.1598997819118,
                  y: 48.709033000926
                },
                {
                  x: 2.1598997819118,
                  y: 48.709033000926
                },
                {
                  x: 2.1598997819118,
                  y: 48.709033000926
                },
                {
                  x: 2.1598997819118,
                  y: 48.709033000926
                },
                {
                  x: 2.1598997819118,
                  y: 48.709033000926
                }
              ],
              status: 'active',
              id_park: '711a6343-f185-11e9-bed9-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            }
          ],
          unavailabilities: {
            occasional: [],
            recurring: []
          },
          parkfares: {
            occasional: [],
            recurring: []
          },
          granted_points: {
            occasional: [],
            recurring: []
          },
          id_park: '711a6343-f185-11e9-bed9-10e7c648c7ad',
          origin: 'PM',
          id_park_source: 'epaps_parking_chemin_du_moulon',
          id_park_type: 2,
          name: 'Parking Plaine des sports',
          address: 'chemin du moulon palaiseau',
          capacityMax: 60,
          latitude: 48.7090596,
          longitude: 2.1599877,
          polygon: [
            {
              x: 2.1596753498193,
              y: 48.709307341609
            },
            {
              x: 2.1596914519894,
              y: 48.708801137634
            },
            {
              x: 2.16017988448,
              y: 48.708963973034
            },
            {
              x: 2.1601530475299,
              y: 48.709218844778
            },
            {
              x: 2.1596753498193,
              y: 48.709307341609
            }
          ],
          description: null,
          indoor: 1,
          max_height: 190,
          status: 'active',
          nb_pmr: 0,
          nb_charging_point: 0
        },
        {
          segments: [
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991b7e70-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_2',
              name: '17',
              polygon: [
                {
                  x: 2.2023269534111,
                  y: 48.715588449101
                },
                {
                  x: 2.2023269534111,
                  y: 48.715588449101
                },
                {
                  x: 2.2023269534111,
                  y: 48.715588449101
                },
                {
                  x: 2.2023269534111,
                  y: 48.715588449101
                },
                {
                  x: 2.2023269534111,
                  y: 48.715588449101
                }
              ],
              status: 'active',
              id_park: '98f6d207-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991b7fa6-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_2',
              name: '16',
              polygon: [
                {
                  x: 2.202308177948,
                  y: 48.715518545344
                },
                {
                  x: 2.202308177948,
                  y: 48.715518545344
                },
                {
                  x: 2.202308177948,
                  y: 48.715518545344
                },
                {
                  x: 2.202308177948,
                  y: 48.715518545344
                },
                {
                  x: 2.202308177948,
                  y: 48.715518545344
                }
              ],
              status: 'active',
              id_park: '98f6d207-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991b84a0-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_2',
              name: '15',
              polygon: [
                {
                  x: 2.2022947669029,
                  y: 48.715453065788
                },
                {
                  x: 2.2022947669029,
                  y: 48.715453065788
                },
                {
                  x: 2.2022947669029,
                  y: 48.715453065788
                },
                {
                  x: 2.2022947669029,
                  y: 48.715453065788
                },
                {
                  x: 2.2022947669029,
                  y: 48.715453065788
                }
              ],
              status: 'active',
              id_park: '98f6d207-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991b855c-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_2',
              name: '14',
              polygon: [
                {
                  x: 2.2022813558578,
                  y: 48.715384046704
                },
                {
                  x: 2.2022813558578,
                  y: 48.715384046704
                },
                {
                  x: 2.2022813558578,
                  y: 48.715384046704
                },
                {
                  x: 2.2022813558578,
                  y: 48.715384046704
                },
                {
                  x: 2.2022813558578,
                  y: 48.715384046704
                }
              ],
              status: 'active',
              id_park: '98f6d207-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991b94d0-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_2',
              name: '11',
              polygon: [
                {
                  x: 2.2022317349911,
                  y: 48.715172564562
                },
                {
                  x: 2.2022317349911,
                  y: 48.715172564562
                },
                {
                  x: 2.2022317349911,
                  y: 48.715172564562
                },
                {
                  x: 2.2022317349911,
                  y: 48.715172564562
                },
                {
                  x: 2.2022317349911,
                  y: 48.715172564562
                }
              ],
              status: 'active',
              id_park: '98f6d207-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991bb3b8-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_2',
              name: '13',
              polygon: [
                {
                  x: 2.2022625803947,
                  y: 48.715313257801
                },
                {
                  x: 2.2022625803947,
                  y: 48.715313257801
                },
                {
                  x: 2.2022625803947,
                  y: 48.715313257801
                },
                {
                  x: 2.2022625803947,
                  y: 48.715313257801
                },
                {
                  x: 2.2022625803947,
                  y: 48.715313257801
                }
              ],
              status: 'active',
              id_park: '98f6d207-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991bba06-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_2',
              name: '12',
              polygon: [
                {
                  x: 2.2022464871407,
                  y: 48.715242468799
                },
                {
                  x: 2.2022464871407,
                  y: 48.715242468799
                },
                {
                  x: 2.2022464871407,
                  y: 48.715242468799
                },
                {
                  x: 2.2022464871407,
                  y: 48.715242468799
                },
                {
                  x: 2.2022464871407,
                  y: 48.715242468799
                }
              ],
              status: 'active',
              id_park: '98f6d207-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            }
          ],
          unavailabilities: {
            occasional: [],
            recurring: []
          },
          parkfares: {
            occasional: [],
            recurring: []
          },
          granted_points: {
            occasional: [],
            recurring: []
          },
          id_park: '98f6d207-d143-11e9-8218-10e7c648c7ad',
          origin: 'PM',
          id_park_source: 'epaps_avenue_de_la_vauve_2',
          id_park_type: 2,
          name: 'Avenue de la Vauve 2',
          address: 'Avenue de la Vauve, Palaiseau',
          capacityMax: 7,
          latitude: 48.7153354,
          longitude: 2.2023189,
          polygon: [
            {
              x: 2.2023116060676,
              y: 48.715594554635
            },
            {
              x: 2.2023840553063,
              y: 48.715583936351
            },
            {
              x: 2.2022794546353,
              y: 48.715150354483
            },
            {
              x: 2.2022123720069,
              y: 48.715157433401
            },
            {
              x: 2.2023116060676,
              y: 48.715594554635
            }
          ],
          description: null,
          indoor: 0,
          max_height: 190,
          status: 'active',
          nb_pmr: 0,
          nb_charging_point: 0
        },
        {
          segments: [
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '421ae8ed-f3cf-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '10ccdb00000200f9',
              polygon: [
                {
                  x: 2.1618743330009,
                  y: 48.709748706175
                },
                {
                  x: 2.1618743330009,
                  y: 48.709748706175
                },
                {
                  x: 2.1618743330009,
                  y: 48.709748706175
                },
                {
                  x: 2.1618743330009,
                  y: 48.709748706175
                },
                {
                  x: 2.1618743330009,
                  y: 48.709748706175
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '421aedd3-f3cf-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '10ccdb00000200f8',
              polygon: [
                {
                  x: 2.1619435836391,
                  y: 48.709747821216
                },
                {
                  x: 2.1619435836391,
                  y: 48.709747821216
                },
                {
                  x: 2.1619435836391,
                  y: 48.709747821216
                },
                {
                  x: 2.1619435836391,
                  y: 48.709747821216
                },
                {
                  x: 2.1619435836391,
                  y: 48.709747821216
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '421aee2d-f3cf-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '10ccdb00000200f6',
              polygon: [
                {
                  x: 2.162015758841,
                  y: 48.709804757259
                },
                {
                  x: 2.162015758841,
                  y: 48.709804757259
                },
                {
                  x: 2.162015758841,
                  y: 48.709804757259
                },
                {
                  x: 2.162015758841,
                  y: 48.709804757259
                },
                {
                  x: 2.162015758841,
                  y: 48.709804757259
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '421af27d-f3cf-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '10ccdb00000200f5',
              polygon: [
                {
                  x: 2.16208876729,
                  y: 48.709803341347
                },
                {
                  x: 2.16208876729,
                  y: 48.709803341347
                },
                {
                  x: 2.16208876729,
                  y: 48.709803341347
                },
                {
                  x: 2.16208876729,
                  y: 48.709803341347
                },
                {
                  x: 2.16208876729,
                  y: 48.709803341347
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '421b4cc2-f3cf-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '10ccdb00000200f3',
              polygon: [
                {
                  x: 2.1622317254918,
                  y: 48.709738617619
                },
                {
                  x: 2.1622317254918,
                  y: 48.709738617619
                },
                {
                  x: 2.1622317254918,
                  y: 48.709738617619
                },
                {
                  x: 2.1622317254918,
                  y: 48.709738617619
                },
                {
                  x: 2.1622317254918,
                  y: 48.709738617619
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '421b4cc3-f3cf-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '10ccdb00000200f4',
              polygon: [
                {
                  x: 2.1621611327871,
                  y: 48.709740210536
                },
                {
                  x: 2.1621611327871,
                  y: 48.709740210536
                },
                {
                  x: 2.1621611327871,
                  y: 48.709740210536
                },
                {
                  x: 2.1621611327871,
                  y: 48.709740210536
                },
                {
                  x: 2.1621611327871,
                  y: 48.709740210536
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '421b58f7-f3cf-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '10ccdb00000200f2',
              polygon: [
                {
                  x: 2.1624699141676,
                  y: 48.709792367877
                },
                {
                  x: 2.1624699141676,
                  y: 48.709792367877
                },
                {
                  x: 2.1624699141676,
                  y: 48.709792367877
                },
                {
                  x: 2.1624699141676,
                  y: 48.709792367877
                },
                {
                  x: 2.1624699141676,
                  y: 48.709792367877
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '421b5f08-f3cf-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '10ccdb00000200f1',
              polygon: [
                {
                  x: 2.1642101902737,
                  y: 48.709788474087
                },
                {
                  x: 2.1642101902737,
                  y: 48.709788474087
                },
                {
                  x: 2.1642101902737,
                  y: 48.709788474087
                },
                {
                  x: 2.1642101902737,
                  y: 48.709788474087
                },
                {
                  x: 2.1642101902737,
                  y: 48.709788474087
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '421b64de-f3cf-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '10ccdb00000200f0',
              polygon: [
                {
                  x: 2.1642810514491,
                  y: 48.709787766131
                },
                {
                  x: 2.1642810514491,
                  y: 48.709787766131
                },
                {
                  x: 2.1642810514491,
                  y: 48.709787766131
                },
                {
                  x: 2.1642810514491,
                  y: 48.709787766131
                },
                {
                  x: 2.1642810514491,
                  y: 48.709787766131
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '71558005-f185-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '39',
              polygon: [
                {
                  x: 2.1639834290896,
                  y: 48.709721504711
                },
                {
                  x: 2.1639834290896,
                  y: 48.709721504711
                },
                {
                  x: 2.1639834290896,
                  y: 48.709721504711
                },
                {
                  x: 2.1639834290896,
                  y: 48.709721504711
                },
                {
                  x: 2.1639834290896,
                  y: 48.709721504711
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99261314-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '9',
              polygon: [
                {
                  x: 2.164007860945,
                  y: 48.709790531563
                },
                {
                  x: 2.164007860945,
                  y: 48.709790531563
                },
                {
                  x: 2.164007860945,
                  y: 48.709790531563
                },
                {
                  x: 2.164007860945,
                  y: 48.709790531563
                },
                {
                  x: 2.164007860945,
                  y: 48.709790531563
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99261a4a-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '8',
              polygon: [
                {
                  x: 2.1639203971777,
                  y: 48.709790531563
                },
                {
                  x: 2.1639203971777,
                  y: 48.709790531563
                },
                {
                  x: 2.1639203971777,
                  y: 48.709790531563
                },
                {
                  x: 2.1639203971777,
                  y: 48.709790531563
                },
                {
                  x: 2.1639203971777,
                  y: 48.709790531563
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99261d7e-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '7',
              polygon: [
                {
                  x: 2.1636538018231,
                  y: 48.709792301481
                },
                {
                  x: 2.1636538018231,
                  y: 48.709792301481
                },
                {
                  x: 2.1636538018231,
                  y: 48.709792301481
                },
                {
                  x: 2.1636538018231,
                  y: 48.709792301481
                },
                {
                  x: 2.1636538018231,
                  y: 48.709792301481
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99261fba-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '6',
              polygon: [
                {
                  x: 2.1635717145908,
                  y: 48.709791416522
                },
                {
                  x: 2.1635717145908,
                  y: 48.709791416522
                },
                {
                  x: 2.1635717145908,
                  y: 48.709791416522
                },
                {
                  x: 2.1635717145908,
                  y: 48.709791416522
                },
                {
                  x: 2.1635717145908,
                  y: 48.709791416522
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992633cb-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '5',
              polygon: [
                {
                  x: 2.1633544564247,
                  y: 48.709789646604
                },
                {
                  x: 2.1633544564247,
                  y: 48.709789646604
                },
                {
                  x: 2.1633544564247,
                  y: 48.709789646604
                },
                {
                  x: 2.1633544564247,
                  y: 48.709789646604
                },
                {
                  x: 2.1633544564247,
                  y: 48.709789646604
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99263515-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '35',
              polygon: [
                {
                  x: 2.1711727711972,
                  y: 48.709608229671
                },
                {
                  x: 2.1711727711972,
                  y: 48.709608229671
                },
                {
                  x: 2.1711727711972,
                  y: 48.709608229671
                },
                {
                  x: 2.1711727711972,
                  y: 48.709608229671
                },
                {
                  x: 2.1711727711972,
                  y: 48.709608229671
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99266057-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '34',
              polygon: [
                {
                  x: 2.1710228763325,
                  y: 48.709615309369
                },
                {
                  x: 2.1710228763325,
                  y: 48.709615309369
                },
                {
                  x: 2.1710228763325,
                  y: 48.709615309369
                },
                {
                  x: 2.1710228763325,
                  y: 48.709615309369
                },
                {
                  x: 2.1710228763325,
                  y: 48.709615309369
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99266931-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '4',
              polygon: [
                {
                  x: 2.1632713094736,
                  y: 48.709791416522
                },
                {
                  x: 2.1632713094736,
                  y: 48.709791416522
                },
                {
                  x: 2.1632713094736,
                  y: 48.709791416522
                },
                {
                  x: 2.1632713094736,
                  y: 48.709791416522
                },
                {
                  x: 2.1632713094736,
                  y: 48.709791416522
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99266b73-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '36',
              polygon: [
                {
                  x: 2.17130719944,
                  y: 48.709604689822
                },
                {
                  x: 2.17130719944,
                  y: 48.709604689822
                },
                {
                  x: 2.17130719944,
                  y: 48.709604689822
                },
                {
                  x: 2.17130719944,
                  y: 48.709604689822
                },
                {
                  x: 2.17130719944,
                  y: 48.709604689822
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99269553-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '33',
              polygon: [
                {
                  x: 2.1703362599183,
                  y: 48.709647167995
                },
                {
                  x: 2.1703362599183,
                  y: 48.709647167995
                },
                {
                  x: 2.1703362599183,
                  y: 48.709647167995
                },
                {
                  x: 2.1703362599183,
                  y: 48.709647167995
                },
                {
                  x: 2.1703362599183,
                  y: 48.709647167995
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9926a38d-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '32',
              polygon: [
                {
                  x: 2.1702236250435,
                  y: 48.709647167995
                },
                {
                  x: 2.1702236250435,
                  y: 48.709647167995
                },
                {
                  x: 2.1702236250435,
                  y: 48.709647167995
                },
                {
                  x: 2.1702236250435,
                  y: 48.709647167995
                },
                {
                  x: 2.1702236250435,
                  y: 48.709647167995
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9926a643-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '31',
              polygon: [
                {
                  x: 2.1701163523487,
                  y: 48.709643628149
                },
                {
                  x: 2.1701163523487,
                  y: 48.709643628149
                },
                {
                  x: 2.1701163523487,
                  y: 48.709643628149
                },
                {
                  x: 2.1701163523487,
                  y: 48.709643628149
                },
                {
                  x: 2.1701163523487,
                  y: 48.709643628149
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9926b015-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '30',
              polygon: [
                {
                  x: 2.1698749378715,
                  y: 48.709647167995
                },
                {
                  x: 2.1698749378715,
                  y: 48.709647167995
                },
                {
                  x: 2.1698749378715,
                  y: 48.709647167995
                },
                {
                  x: 2.1698749378715,
                  y: 48.709647167995
                },
                {
                  x: 2.1698749378715,
                  y: 48.709647167995
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9926b561-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '29',
              polygon: [
                {
                  x: 2.1697845506728,
                  y: 48.709643628149
                },
                {
                  x: 2.1697845506728,
                  y: 48.709643628149
                },
                {
                  x: 2.1697845506728,
                  y: 48.709643628149
                },
                {
                  x: 2.1697845506728,
                  y: 48.709643628149
                },
                {
                  x: 2.1697845506728,
                  y: 48.709643628149
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9926b92a-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '28',
              polygon: [
                {
                  x: 2.1694523327342,
                  y: 48.709664867223
                },
                {
                  x: 2.1694523327342,
                  y: 48.709664867223
                },
                {
                  x: 2.1694523327342,
                  y: 48.709664867223
                },
                {
                  x: 2.1694523327342,
                  y: 48.709664867223
                },
                {
                  x: 2.1694523327342,
                  y: 48.709664867223
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9926c00d-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '27',
              polygon: [
                {
                  x: 2.1693450264698,
                  y: 48.709668407068
                },
                {
                  x: 2.1693450264698,
                  y: 48.709668407068
                },
                {
                  x: 2.1693450264698,
                  y: 48.709668407068
                },
                {
                  x: 2.1693450264698,
                  y: 48.709668407068
                },
                {
                  x: 2.1693450264698,
                  y: 48.709668407068
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9926c397-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '26',
              polygon: [
                {
                  x: 2.1666405742547,
                  y: 48.70970026566
                },
                {
                  x: 2.1666405742547,
                  y: 48.70970026566
                },
                {
                  x: 2.1666405742547,
                  y: 48.70970026566
                },
                {
                  x: 2.1666405742547,
                  y: 48.70970026566
                },
                {
                  x: 2.1666405742547,
                  y: 48.70970026566
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9926c64e-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '25',
              polygon: [
                {
                  x: 2.1665386324084,
                  y: 48.709707345345
                },
                {
                  x: 2.1665386324084,
                  y: 48.709707345345
                },
                {
                  x: 2.1665386324084,
                  y: 48.709707345345
                },
                {
                  x: 2.1665386324084,
                  y: 48.709707345345
                },
                {
                  x: 2.1665386324084,
                  y: 48.709707345345
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9926c922-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '24',
              polygon: [
                {
                  x: 2.1639123589564,
                  y: 48.709721504711
                },
                {
                  x: 2.1639123589564,
                  y: 48.709721504711
                },
                {
                  x: 2.1639123589564,
                  y: 48.709721504711
                },
                {
                  x: 2.1639123589564,
                  y: 48.709721504711
                },
                {
                  x: 2.1639123589564,
                  y: 48.709721504711
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99514f55-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '23',
              polygon: [
                {
                  x: 2.1638345649609,
                  y: 48.709722389671
                },
                {
                  x: 2.1638345649609,
                  y: 48.709722389671
                },
                {
                  x: 2.1638345649609,
                  y: 48.709722389671
                },
                {
                  x: 2.1638345649609,
                  y: 48.709722389671
                },
                {
                  x: 2.1638345649609,
                  y: 48.709722389671
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99515099-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '22',
              polygon: [
                {
                  x: 2.1635730564594,
                  y: 48.709722389671
                },
                {
                  x: 2.1635730564594,
                  y: 48.709722389671
                },
                {
                  x: 2.1635730564594,
                  y: 48.709722389671
                },
                {
                  x: 2.1635730564594,
                  y: 48.709722389671
                },
                {
                  x: 2.1635730564594,
                  y: 48.709722389671
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9951538f-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '21',
              polygon: [
                {
                  x: 2.1634979523145,
                  y: 48.709723274631
                },
                {
                  x: 2.1634979523145,
                  y: 48.709723274631
                },
                {
                  x: 2.1634979523145,
                  y: 48.709723274631
                },
                {
                  x: 2.1634979523145,
                  y: 48.709723274631
                },
                {
                  x: 2.1634979523145,
                  y: 48.709723274631
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995156fb-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '20',
              polygon: [
                {
                  x: 2.1634215108859,
                  y: 48.709722389671
                },
                {
                  x: 2.1634215108859,
                  y: 48.709722389671
                },
                {
                  x: 2.1634215108859,
                  y: 48.709722389671
                },
                {
                  x: 2.1634215108859,
                  y: 48.709722389671
                },
                {
                  x: 2.1634215108859,
                  y: 48.709722389671
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99515a7c-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '19',
              polygon: [
                {
                  x: 2.1632377818609,
                  y: 48.709725044552
                },
                {
                  x: 2.1632377818609,
                  y: 48.709725044552
                },
                {
                  x: 2.1632377818609,
                  y: 48.709725044552
                },
                {
                  x: 2.1632377818609,
                  y: 48.709725044552
                },
                {
                  x: 2.1632377818609,
                  y: 48.709725044552
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99515c44-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '18',
              polygon: [
                {
                  x: 2.163164025698,
                  y: 48.709725044552
                },
                {
                  x: 2.163164025698,
                  y: 48.709725044552
                },
                {
                  x: 2.163164025698,
                  y: 48.709725044552
                },
                {
                  x: 2.163164025698,
                  y: 48.709725044552
                },
                {
                  x: 2.163164025698,
                  y: 48.709725044552
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99516577-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '14',
              polygon: [
                {
                  x: 2.1646459423579,
                  y: 48.709790531563
                },
                {
                  x: 2.1646459423579,
                  y: 48.709790531563
                },
                {
                  x: 2.1646459423579,
                  y: 48.709790531563
                },
                {
                  x: 2.1646459423579,
                  y: 48.709790531563
                },
                {
                  x: 2.1646459423579,
                  y: 48.709790531563
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99516a42-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '13',
              polygon: [
                {
                  x: 2.164573520422,
                  y: 48.709790531563
                },
                {
                  x: 2.164573520422,
                  y: 48.709790531563
                },
                {
                  x: 2.164573520422,
                  y: 48.709790531563
                },
                {
                  x: 2.164573520422,
                  y: 48.709790531563
                },
                {
                  x: 2.164573520422,
                  y: 48.709790531563
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99516f87-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_joliot_curie',
              name: '12',
              polygon: [
                {
                  x: 2.1645037829876,
                  y: 48.709790531563
                },
                {
                  x: 2.1645037829876,
                  y: 48.709790531563
                },
                {
                  x: 2.1645037829876,
                  y: 48.709790531563
                },
                {
                  x: 2.1645037829876,
                  y: 48.709790531563
                },
                {
                  x: 2.1645037829876,
                  y: 48.709790531563
                }
              ],
              status: 'active',
              id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            }
          ],
          unavailabilities: {
            occasional: [],
            recurring: []
          },
          parkfares: {
            occasional: [],
            recurring: []
          },
          granted_points: {
            occasional: [],
            recurring: []
          },
          id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
          origin: 'PM',
          id_park_source: 'epaps_rue_joliot_curie',
          id_park_type: 2,
          name: 'Rue Joliot Curie',
          address: 'Rue Joliot-Curie, Gif-sur-Yvette',
          capacityMax: 38,
          latitude: 48.7097358,
          longitude: 2.168024,
          polygon: [
            {
              x: 2.1617308402656,
              y: 48.709831239662
            },
            {
              x: 2.1617424606947,
              y: 48.709760442947
            },
            {
              x: 2.1617308462095,
              y: 48.709703805503
            },
            {
              x: 2.1633088529275,
              y: 48.709703805503
            },
            {
              x: 2.1649030499123,
              y: 48.709682566445
            },
            {
              x: 2.1721597567539,
              y: 48.70957637102
            },
            {
              x: 2.1721597567539,
              y: 48.709725044552
            },
            {
              x: 2.1617299546165,
              y: 48.709866637983
            },
            {
              x: 2.1617308402656,
              y: 48.709831239662
            }
          ],
          description: null,
          indoor: 0,
          max_height: 190,
          status: 'active',
          nb_pmr: 0,
          nb_charging_point: 0
        },
        {
          segments: [
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '71d2054f-f185-11e9-bed9-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200f7',
              polygon: [
                {
                  x: 2.1992880167105,
                  y: 48.712447108459
                },
                {
                  x: 2.1992880167105,
                  y: 48.712447108459
                },
                {
                  x: 2.1992880167105,
                  y: 48.712447108459
                },
                {
                  x: 2.1992880167105,
                  y: 48.712447108459
                },
                {
                  x: 2.1992880167105,
                  y: 48.712447108459
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992c8754-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '226',
              polygon: [
                {
                  x: 2.1939519131968,
                  y: 48.713050670373
                },
                {
                  x: 2.1939519131968,
                  y: 48.713050670373
                },
                {
                  x: 2.1939519131968,
                  y: 48.713050670373
                },
                {
                  x: 2.1939519131968,
                  y: 48.713050670373
                },
                {
                  x: 2.1939519131968,
                  y: 48.713050670373
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992c8b8a-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '225',
              polygon: [
                {
                  x: 2.1940210194564,
                  y: 48.713042263846
                },
                {
                  x: 2.1940210194564,
                  y: 48.713042263846
                },
                {
                  x: 2.1940210194564,
                  y: 48.713042263846
                },
                {
                  x: 2.1940210194564,
                  y: 48.713042263846
                },
                {
                  x: 2.1940210194564,
                  y: 48.713042263846
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992c8e4a-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '224',
              polygon: [
                {
                  x: 2.1940901256929,
                  y: 48.713033857278
                },
                {
                  x: 2.1940901256929,
                  y: 48.713033857278
                },
                {
                  x: 2.1940901256929,
                  y: 48.713033857278
                },
                {
                  x: 2.1940901256929,
                  y: 48.713033857278
                },
                {
                  x: 2.1940901256929,
                  y: 48.713033857278
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992c92fe-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '223',
              polygon: [
                {
                  x: 2.1941592319063,
                  y: 48.713025450668
                },
                {
                  x: 2.1941592319063,
                  y: 48.713025450668
                },
                {
                  x: 2.1941592319063,
                  y: 48.713025450668
                },
                {
                  x: 2.1941592319063,
                  y: 48.713025450668
                },
                {
                  x: 2.1941592319063,
                  y: 48.713025450668
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992ca751-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '217',
              polygon: [
                {
                  x: 2.1956330461542,
                  y: 48.712865061899
                },
                {
                  x: 2.1956330461542,
                  y: 48.712865061899
                },
                {
                  x: 2.1956330461542,
                  y: 48.712865061899
                },
                {
                  x: 2.1956330461542,
                  y: 48.712865061899
                },
                {
                  x: 2.1956330461542,
                  y: 48.712865061899
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99472956-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200c7',
              polygon: [
                {
                  x: 2.1960049822833,
                  y: 48.712921419223
                },
                {
                  x: 2.1960049822833,
                  y: 48.712921419223
                },
                {
                  x: 2.1960049822833,
                  y: 48.712921419223
                },
                {
                  x: 2.1960049822833,
                  y: 48.712921419223
                },
                {
                  x: 2.1960049822833,
                  y: 48.712921419223
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c769b-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200db',
              polygon: [
                {
                  x: 2.2004333184316,
                  y: 48.712309061948
                },
                {
                  x: 2.2004333184316,
                  y: 48.712309061948
                },
                {
                  x: 2.2004333184316,
                  y: 48.712309061948
                },
                {
                  x: 2.2004333184316,
                  y: 48.712309061948
                },
                {
                  x: 2.2004333184316,
                  y: 48.712309061948
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c7827-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200da',
              polygon: [
                {
                  x: 2.1999290616084,
                  y: 48.712367466287
                },
                {
                  x: 2.1999290616084,
                  y: 48.712367466287
                },
                {
                  x: 2.1999290616084,
                  y: 48.712367466287
                },
                {
                  x: 2.1999290616084,
                  y: 48.712367466287
                },
                {
                  x: 2.1999290616084,
                  y: 48.712367466287
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c7c01-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200d9',
              polygon: [
                {
                  x: 2.199859324174,
                  y: 48.712374545597
                },
                {
                  x: 2.199859324174,
                  y: 48.712374545597
                },
                {
                  x: 2.199859324174,
                  y: 48.712374545597
                },
                {
                  x: 2.199859324174,
                  y: 48.712374545597
                },
                {
                  x: 2.199859324174,
                  y: 48.712374545597
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c7f7b-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200d8',
              polygon: [
                {
                  x: 2.199786901474,
                  y: 48.712381624905
                },
                {
                  x: 2.199786901474,
                  y: 48.712381624905
                },
                {
                  x: 2.199786901474,
                  y: 48.712381624905
                },
                {
                  x: 2.199786901474,
                  y: 48.712381624905
                },
                {
                  x: 2.199786901474,
                  y: 48.712381624905
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c826a-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200d7',
              polygon: [
                {
                  x: 2.199719847777,
                  y: 48.712392243865
                },
                {
                  x: 2.199719847777,
                  y: 48.712392243865
                },
                {
                  x: 2.199719847777,
                  y: 48.712392243865
                },
                {
                  x: 2.199719847777,
                  y: 48.712392243865
                },
                {
                  x: 2.199719847777,
                  y: 48.712392243865
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c8bc7-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200d5',
              polygon: [
                {
                  x: 2.1992102280641,
                  y: 48.712455957581
                },
                {
                  x: 2.1992102280641,
                  y: 48.712455957581
                },
                {
                  x: 2.1992102280641,
                  y: 48.712455957581
                },
                {
                  x: 2.1992102280641,
                  y: 48.712455957581
                },
                {
                  x: 2.1992102280641,
                  y: 48.712455957581
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c8e46-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200d4',
              polygon: [
                {
                  x: 2.199135123155,
                  y: 48.712463036878
                },
                {
                  x: 2.199135123155,
                  y: 48.712463036878
                },
                {
                  x: 2.199135123155,
                  y: 48.712463036878
                },
                {
                  x: 2.199135123155,
                  y: 48.712463036878
                },
                {
                  x: 2.199135123155,
                  y: 48.712463036878
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c9046-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200d3',
              polygon: [
                {
                  x: 2.199070751667,
                  y: 48.712471885997
                },
                {
                  x: 2.199070751667,
                  y: 48.712471885997
                },
                {
                  x: 2.199070751667,
                  y: 48.712471885997
                },
                {
                  x: 2.199070751667,
                  y: 48.712471885997
                },
                {
                  x: 2.199070751667,
                  y: 48.712471885997
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c948a-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200d2',
              polygon: [
                {
                  x: 2.199009057803,
                  y: 48.712480735115
                },
                {
                  x: 2.199009057803,
                  y: 48.712480735115
                },
                {
                  x: 2.199009057803,
                  y: 48.712480735115
                },
                {
                  x: 2.199009057803,
                  y: 48.712480735115
                },
                {
                  x: 2.199009057803,
                  y: 48.712480735115
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c9821-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200d0',
              polygon: [
                {
                  x: 2.1982875558046,
                  y: 48.712666566234
                },
                {
                  x: 2.1982875558046,
                  y: 48.712666566234
                },
                {
                  x: 2.1982875558046,
                  y: 48.712666566234
                },
                {
                  x: 2.1982875558046,
                  y: 48.712666566234
                },
                {
                  x: 2.1982875558046,
                  y: 48.712666566234
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c9a12-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200d1',
              polygon: [
                {
                  x: 2.1989446878433,
                  y: 48.712489584232
                },
                {
                  x: 2.1989446878433,
                  y: 48.712489584232
                },
                {
                  x: 2.1989446878433,
                  y: 48.712489584232
                },
                {
                  x: 2.1989446878433,
                  y: 48.712489584232
                },
                {
                  x: 2.1989446878433,
                  y: 48.712489584232
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995c9e4e-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200cf',
              polygon: [
                {
                  x: 2.1981561015814,
                  y: 48.712678954951
                },
                {
                  x: 2.1981561015814,
                  y: 48.712678954951
                },
                {
                  x: 2.1981561015814,
                  y: 48.712678954951
                },
                {
                  x: 2.1981561015814,
                  y: 48.712678954951
                },
                {
                  x: 2.1981561015814,
                  y: 48.712678954951
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995ca218-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200ce',
              polygon: [
                {
                  x: 2.1951748301938,
                  y: 48.713010794445
                },
                {
                  x: 2.1951748301938,
                  y: 48.713010794445
                },
                {
                  x: 2.1951748301938,
                  y: 48.713010794445
                },
                {
                  x: 2.1951748301938,
                  y: 48.713010794445
                },
                {
                  x: 2.1951748301938,
                  y: 48.713010794445
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995ca42c-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200cd',
              polygon: [
                {
                  x: 2.1949924478202,
                  y: 48.713034686804
                },
                {
                  x: 2.1949924478202,
                  y: 48.713034686804
                },
                {
                  x: 2.1949924478202,
                  y: 48.713034686804
                },
                {
                  x: 2.1949924478202,
                  y: 48.713034686804
                },
                {
                  x: 2.1949924478202,
                  y: 48.713034686804
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995cc6ae-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200cc',
              polygon: [
                {
                  x: 2.1974506907025,
                  y: 48.712760366442
                },
                {
                  x: 2.1974506907025,
                  y: 48.712760366442
                },
                {
                  x: 2.1974506907025,
                  y: 48.712760366442
                },
                {
                  x: 2.1974506907025,
                  y: 48.712760366442
                },
                {
                  x: 2.1974506907025,
                  y: 48.712760366442
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995ccc18-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200cb',
              polygon: [
                {
                  x: 2.1972951236996,
                  y: 48.712778064575
                },
                {
                  x: 2.1972951236996,
                  y: 48.712778064575
                },
                {
                  x: 2.1972951236996,
                  y: 48.712778064575
                },
                {
                  x: 2.1972951236996,
                  y: 48.712778064575
                },
                {
                  x: 2.1972951236996,
                  y: 48.712778064575
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995cce97-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200ca',
              polygon: [
                {
                  x: 2.1971449216746,
                  y: 48.712794877796
                },
                {
                  x: 2.1971449216746,
                  y: 48.712794877796
                },
                {
                  x: 2.1971449216746,
                  y: 48.712794877796
                },
                {
                  x: 2.1971449216746,
                  y: 48.712794877796
                },
                {
                  x: 2.1971449216746,
                  y: 48.712794877796
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995cd341-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200c9',
              polygon: [
                {
                  x: 2.1962651823159,
                  y: 48.71288956267
                },
                {
                  x: 2.1962651823159,
                  y: 48.71288956267
                },
                {
                  x: 2.1962651823159,
                  y: 48.71288956267
                },
                {
                  x: 2.1962651823159,
                  y: 48.71288956267
                },
                {
                  x: 2.1962651823159,
                  y: 48.71288956267
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995cd847-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200c8',
              polygon: [
                {
                  x: 2.1961364217242,
                  y: 48.712907260757
                },
                {
                  x: 2.1961364217242,
                  y: 48.712907260757
                },
                {
                  x: 2.1961364217242,
                  y: 48.712907260757
                },
                {
                  x: 2.1961364217242,
                  y: 48.712907260757
                },
                {
                  x: 2.1961364217242,
                  y: 48.712907260757
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995d2d12-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '216',
              polygon: [
                {
                  x: 2.195701481478,
                  y: 48.712857097793
                },
                {
                  x: 2.195701481478,
                  y: 48.712857097793
                },
                {
                  x: 2.195701481478,
                  y: 48.712857097793
                },
                {
                  x: 2.195701481478,
                  y: 48.712857097793
                },
                {
                  x: 2.195701481478,
                  y: 48.712857097793
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995d6a95-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '215',
              polygon: [
                {
                  x: 2.1957699167802,
                  y: 48.712849133647
                },
                {
                  x: 2.1957699167802,
                  y: 48.712849133647
                },
                {
                  x: 2.1957699167802,
                  y: 48.712849133647
                },
                {
                  x: 2.1957699167802,
                  y: 48.712849133647
                },
                {
                  x: 2.1957699167802,
                  y: 48.712849133647
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995d6e2d-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '214',
              polygon: [
                {
                  x: 2.1958383520607,
                  y: 48.712841169459
                },
                {
                  x: 2.1958383520607,
                  y: 48.712841169459
                },
                {
                  x: 2.1958383520607,
                  y: 48.712841169459
                },
                {
                  x: 2.1958383520607,
                  y: 48.712841169459
                },
                {
                  x: 2.1958383520607,
                  y: 48.712841169459
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e18a4-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '127',
              polygon: [
                {
                  x: 2.203558438916,
                  y: 48.711968202828
                },
                {
                  x: 2.203558438916,
                  y: 48.711968202828
                },
                {
                  x: 2.203558438916,
                  y: 48.711968202828
                },
                {
                  x: 2.203558438916,
                  y: 48.711968202828
                },
                {
                  x: 2.203558438916,
                  y: 48.711968202828
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e1c0d-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '126',
              polygon: [
                {
                  x: 2.203489556292,
                  y: 48.711974102219
                },
                {
                  x: 2.203489556292,
                  y: 48.711974102219
                },
                {
                  x: 2.203489556292,
                  y: 48.711974102219
                },
                {
                  x: 2.203489556292,
                  y: 48.711974102219
                },
                {
                  x: 2.203489556292,
                  y: 48.711974102219
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e1f27-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '125',
              polygon: [
                {
                  x: 2.2028754277274,
                  y: 48.712033155878
                },
                {
                  x: 2.2028754277274,
                  y: 48.712033155878
                },
                {
                  x: 2.2028754277274,
                  y: 48.712033155878
                },
                {
                  x: 2.2028754277274,
                  y: 48.712033155878
                },
                {
                  x: 2.2028754277274,
                  y: 48.712033155878
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e228d-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '131',
              polygon: [
                {
                  x: 2.2038339692505,
                  y: 48.711944604855
                },
                {
                  x: 2.2038339692505,
                  y: 48.711944604855
                },
                {
                  x: 2.2038339692505,
                  y: 48.711944604855
                },
                {
                  x: 2.2038339692505,
                  y: 48.711944604855
                },
                {
                  x: 2.2038339692505,
                  y: 48.711944604855
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e27b1-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '130',
              polygon: [
                {
                  x: 2.2037650866911,
                  y: 48.71195050441
                },
                {
                  x: 2.2037650866911,
                  y: 48.71195050441
                },
                {
                  x: 2.2037650866911,
                  y: 48.71195050441
                },
                {
                  x: 2.2037650866911,
                  y: 48.71195050441
                },
                {
                  x: 2.2037650866911,
                  y: 48.71195050441
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e34b7-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '129',
              polygon: [
                {
                  x: 2.2036962041156,
                  y: 48.711956403924
                },
                {
                  x: 2.2036962041156,
                  y: 48.711956403924
                },
                {
                  x: 2.2036962041156,
                  y: 48.711956403924
                },
                {
                  x: 2.2036962041156,
                  y: 48.711956403924
                },
                {
                  x: 2.2036962041156,
                  y: 48.711956403924
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e383b-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '128',
              polygon: [
                {
                  x: 2.2036273215239,
                  y: 48.711962303396
                },
                {
                  x: 2.2036273215239,
                  y: 48.711962303396
                },
                {
                  x: 2.2036273215239,
                  y: 48.711962303396
                },
                {
                  x: 2.2036273215239,
                  y: 48.711962303396
                },
                {
                  x: 2.2036273215239,
                  y: 48.711962303396
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e5050-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '118',
              polygon: [
                {
                  x: 2.2021955266977,
                  y: 48.712096681962
                },
                {
                  x: 2.2021955266977,
                  y: 48.712096681962
                },
                {
                  x: 2.2021955266977,
                  y: 48.712096681962
                },
                {
                  x: 2.2021955266977,
                  y: 48.712096681962
                },
                {
                  x: 2.2021955266977,
                  y: 48.712096681962
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e5958-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '121',
              polygon: [
                {
                  x: 2.2025963190441,
                  y: 48.712057225686
                },
                {
                  x: 2.2025963190441,
                  y: 48.712057225686
                },
                {
                  x: 2.2025963190441,
                  y: 48.712057225686
                },
                {
                  x: 2.2025963190441,
                  y: 48.712057225686
                },
                {
                  x: 2.2025963190441,
                  y: 48.712057225686
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e5dcd-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '124',
              polygon: [
                {
                  x: 2.2028056505816,
                  y: 48.712039173393
                },
                {
                  x: 2.2028056505816,
                  y: 48.712039173393
                },
                {
                  x: 2.2028056505816,
                  y: 48.712039173393
                },
                {
                  x: 2.2028056505816,
                  y: 48.712039173393
                },
                {
                  x: 2.2028056505816,
                  y: 48.712039173393
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e628e-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '123',
              polygon: [
                {
                  x: 2.2027358734191,
                  y: 48.712045190866
                },
                {
                  x: 2.2027358734191,
                  y: 48.712045190866
                },
                {
                  x: 2.2027358734191,
                  y: 48.712045190866
                },
                {
                  x: 2.2027358734191,
                  y: 48.712045190866
                },
                {
                  x: 2.2027358734191,
                  y: 48.712045190866
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e6654-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '122',
              polygon: [
                {
                  x: 2.20266609624,
                  y: 48.712051208297
                },
                {
                  x: 2.20266609624,
                  y: 48.712051208297
                },
                {
                  x: 2.20266609624,
                  y: 48.712051208297
                },
                {
                  x: 2.20266609624,
                  y: 48.712051208297
                },
                {
                  x: 2.20266609624,
                  y: 48.712051208297
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e68bb-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '117',
              polygon: [
                {
                  x: 2.202120423317,
                  y: 48.712101991473
                },
                {
                  x: 2.202120423317,
                  y: 48.712101991473
                },
                {
                  x: 2.202120423317,
                  y: 48.712101991473
                },
                {
                  x: 2.202120423317,
                  y: 48.712101991473
                },
                {
                  x: 2.202120423317,
                  y: 48.712101991473
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e7ca0-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200e2',
              polygon: [
                {
                  x: 2.2010529056574,
                  y: 48.712238268719
                },
                {
                  x: 2.2010529056574,
                  y: 48.712238268719
                },
                {
                  x: 2.2010529056574,
                  y: 48.712238268719
                },
                {
                  x: 2.2010529056574,
                  y: 48.712238268719
                },
                {
                  x: 2.2010529056574,
                  y: 48.712238268719
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e81cb-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '116',
              polygon: [
                {
                  x: 2.2020547084319,
                  y: 48.712109955738
                },
                {
                  x: 2.2020547084319,
                  y: 48.712109955738
                },
                {
                  x: 2.2020547084319,
                  y: 48.712109955738
                },
                {
                  x: 2.2020547084319,
                  y: 48.712109955738
                },
                {
                  x: 2.2020547084319,
                  y: 48.712109955738
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e8461-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '115',
              polygon: [
                {
                  x: 2.2019889973677,
                  y: 48.712118804919
                },
                {
                  x: 2.2019889973677,
                  y: 48.712118804919
                },
                {
                  x: 2.2019889973677,
                  y: 48.712118804919
                },
                {
                  x: 2.2019889973677,
                  y: 48.712118804919
                },
                {
                  x: 2.2019889973677,
                  y: 48.712118804919
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e8e22-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200e3',
              polygon: [
                {
                  x: 2.2011253268291,
                  y: 48.712229419559
                },
                {
                  x: 2.2011253268291,
                  y: 48.712229419559
                },
                {
                  x: 2.2011253268291,
                  y: 48.712229419559
                },
                {
                  x: 2.2011253268291,
                  y: 48.712229419559
                },
                {
                  x: 2.2011253268291,
                  y: 48.712229419559
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e9572-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200e1',
              polygon: [
                {
                  x: 2.200980481429,
                  y: 48.712243578215
                },
                {
                  x: 2.200980481429,
                  y: 48.712243578215
                },
                {
                  x: 2.200980481429,
                  y: 48.712243578215
                },
                {
                  x: 2.200980481429,
                  y: 48.712243578215
                },
                {
                  x: 2.200980481429,
                  y: 48.712243578215
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995e9ca4-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200e0',
              polygon: [
                {
                  x: 2.2009161129976,
                  y: 48.712252427373
                },
                {
                  x: 2.2009161129976,
                  y: 48.712252427373
                },
                {
                  x: 2.2009161129976,
                  y: 48.712252427373
                },
                {
                  x: 2.2009161129976,
                  y: 48.712252427373
                },
                {
                  x: 2.2009161129976,
                  y: 48.712252427373
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995ed915-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200df',
              polygon: [
                {
                  x: 2.2008463740349,
                  y: 48.71226127653
                },
                {
                  x: 2.2008463740349,
                  y: 48.71226127653
                },
                {
                  x: 2.2008463740349,
                  y: 48.71226127653
                },
                {
                  x: 2.2008463740349,
                  y: 48.71226127653
                },
                {
                  x: 2.2008463740349,
                  y: 48.71226127653
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995edd10-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200de',
              polygon: [
                {
                  x: 2.2006452160004,
                  y: 48.71228428433
                },
                {
                  x: 2.2006452160004,
                  y: 48.71228428433
                },
                {
                  x: 2.2006452160004,
                  y: 48.71228428433
                },
                {
                  x: 2.2006452160004,
                  y: 48.71228428433
                },
                {
                  x: 2.2006452160004,
                  y: 48.71228428433
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995eebfc-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200dd',
              polygon: [
                {
                  x: 2.200575478566,
                  y: 48.712291363651
                },
                {
                  x: 2.200575478566,
                  y: 48.712291363651
                },
                {
                  x: 2.200575478566,
                  y: 48.712291363651
                },
                {
                  x: 2.200575478566,
                  y: 48.712291363651
                },
                {
                  x: 2.200575478566,
                  y: 48.712291363651
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '995eef9d-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_boulevard_thomas_gobert',
              name: '10ccdb00000200dc',
              polygon: [
                {
                  x: 2.2005057396033,
                  y: 48.71229844297
                },
                {
                  x: 2.2005057396033,
                  y: 48.71229844297
                },
                {
                  x: 2.2005057396033,
                  y: 48.71229844297
                },
                {
                  x: 2.2005057396033,
                  y: 48.71229844297
                },
                {
                  x: 2.2005057396033,
                  y: 48.71229844297
                }
              ],
              status: 'active',
              id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            }
          ],
          unavailabilities: {
            occasional: [],
            recurring: []
          },
          parkfares: {
            occasional: [],
            recurring: []
          },
          granted_points: {
            occasional: [],
            recurring: []
          },
          id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
          origin: 'PM',
          id_park_source: 'epaps_boulevard_thomas_gobert',
          id_park_type: 2,
          name: 'Boulevard Thomas Gobert',
          address: 'Boulevard Thomas GOBERT palaiseau',
          capacityMax: 52,
          latitude: 48.712679,
          longitude: 2.1983732,
          polygon: [
            {
              x: 2.1921358148147,
              y: 48.713172731323
            },
            {
              x: 2.1922323802832,
              y: 48.713462977539
            },
            {
              x: 2.2047883995352,
              y: 48.712047126503
            },
            {
              x: 2.2047025569588,
              y: 48.711742713327
            },
            {
              x: 2.1921358148147,
              y: 48.713172731323
            }
          ],
          description: 'Zone D',
          indoor: 0,
          max_height: 190,
          status: 'active',
          nb_pmr: 0,
          nb_charging_point: 0
        },
        {
          segments: [
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99257da2-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '37',
              polygon: [
                {
                  x: 2.2028408645714,
                  y: 48.717565269373
                },
                {
                  x: 2.2028408645714,
                  y: 48.717565269373
                },
                {
                  x: 2.2028408645714,
                  y: 48.717565269373
                },
                {
                  x: 2.2028408645714,
                  y: 48.717565269373
                },
                {
                  x: 2.2028408645714,
                  y: 48.717565269373
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992581d2-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '36',
              polygon: [
                {
                  x: 2.2028247712958,
                  y: 48.71749802279
                },
                {
                  x: 2.2028247712958,
                  y: 48.71749802279
                },
                {
                  x: 2.2028247712958,
                  y: 48.71749802279
                },
                {
                  x: 2.2028247712958,
                  y: 48.71749802279
                },
                {
                  x: 2.2028247712958,
                  y: 48.71749802279
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99258391-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '35',
              polygon: [
                {
                  x: 2.2028086780632,
                  y: 48.717430776205
                },
                {
                  x: 2.2028086780632,
                  y: 48.717430776205
                },
                {
                  x: 2.2028086780632,
                  y: 48.717430776205
                },
                {
                  x: 2.2028086780632,
                  y: 48.717430776205
                },
                {
                  x: 2.2028086780632,
                  y: 48.717430776205
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925b5a4-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '34',
              polygon: [
                {
                  x: 2.2027735846014,
                  y: 48.717295831579
                },
                {
                  x: 2.2027735846014,
                  y: 48.717295831579
                },
                {
                  x: 2.2027735846014,
                  y: 48.717295831579
                },
                {
                  x: 2.2027735846014,
                  y: 48.717295831579
                },
                {
                  x: 2.2027735846014,
                  y: 48.717295831579
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925b9d4-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '33',
              polygon: [
                {
                  x: 2.2027535945675,
                  y: 48.717217418419
                },
                {
                  x: 2.2027535945675,
                  y: 48.717217418419
                },
                {
                  x: 2.2027535945675,
                  y: 48.717217418419
                },
                {
                  x: 2.2027535945675,
                  y: 48.717217418419
                },
                {
                  x: 2.2027535945675,
                  y: 48.717217418419
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925bc38-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '32',
              polygon: [
                {
                  x: 2.2027336045959,
                  y: 48.717139005257
                },
                {
                  x: 2.2027336045959,
                  y: 48.717139005257
                },
                {
                  x: 2.2027336045959,
                  y: 48.717139005257
                },
                {
                  x: 2.2027336045959,
                  y: 48.717139005257
                },
                {
                  x: 2.2027336045959,
                  y: 48.717139005257
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925c187-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '31',
              polygon: [
                {
                  x: 2.2027136146866,
                  y: 48.71706059209
                },
                {
                  x: 2.2027136146866,
                  y: 48.71706059209
                },
                {
                  x: 2.2027136146866,
                  y: 48.71706059209
                },
                {
                  x: 2.2027136146866,
                  y: 48.71706059209
                },
                {
                  x: 2.2027136146866,
                  y: 48.71706059209
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925c434-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '30',
              polygon: [
                {
                  x: 2.2026936248396,
                  y: 48.716982178921
                },
                {
                  x: 2.2026936248396,
                  y: 48.716982178921
                },
                {
                  x: 2.2026936248396,
                  y: 48.716982178921
                },
                {
                  x: 2.2026936248396,
                  y: 48.716982178921
                },
                {
                  x: 2.2026936248396,
                  y: 48.716982178921
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925c772-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '29',
              polygon: [
                {
                  x: 2.202673635055,
                  y: 48.716903765748
                },
                {
                  x: 2.202673635055,
                  y: 48.716903765748
                },
                {
                  x: 2.202673635055,
                  y: 48.716903765748
                },
                {
                  x: 2.202673635055,
                  y: 48.716903765748
                },
                {
                  x: 2.202673635055,
                  y: 48.716903765748
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925cabd-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '28',
              polygon: [
                {
                  x: 2.2026536453327,
                  y: 48.716825352571
                },
                {
                  x: 2.2026536453327,
                  y: 48.716825352571
                },
                {
                  x: 2.2026536453327,
                  y: 48.716825352571
                },
                {
                  x: 2.2026536453327,
                  y: 48.716825352571
                },
                {
                  x: 2.2026536453327,
                  y: 48.716825352571
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925e526-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '21',
              polygon: [
                {
                  x: 2.2025337083074,
                  y: 48.716354873439
                },
                {
                  x: 2.2025337083074,
                  y: 48.716354873439
                },
                {
                  x: 2.2025337083074,
                  y: 48.716354873439
                },
                {
                  x: 2.2025337083074,
                  y: 48.716354873439
                },
                {
                  x: 2.2025337083074,
                  y: 48.716354873439
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925e840-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '27',
              polygon: [
                {
                  x: 2.2026336556727,
                  y: 48.716746939391
                },
                {
                  x: 2.2026336556727,
                  y: 48.716746939391
                },
                {
                  x: 2.2026336556727,
                  y: 48.716746939391
                },
                {
                  x: 2.2026336556727,
                  y: 48.716746939391
                },
                {
                  x: 2.2026336556727,
                  y: 48.716746939391
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925f50a-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '24',
              polygon: [
                {
                  x: 2.2025936765396,
                  y: 48.716590113021
                },
                {
                  x: 2.2025936765396,
                  y: 48.716590113021
                },
                {
                  x: 2.2025936765396,
                  y: 48.716590113021
                },
                {
                  x: 2.2025936765396,
                  y: 48.716590113021
                },
                {
                  x: 2.2025936765396,
                  y: 48.716590113021
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925f869-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '23',
              polygon: [
                {
                  x: 2.2025736870666,
                  y: 48.71651169983
                },
                {
                  x: 2.2025736870666,
                  y: 48.71651169983
                },
                {
                  x: 2.2025736870666,
                  y: 48.71651169983
                },
                {
                  x: 2.2025736870666,
                  y: 48.71651169983
                },
                {
                  x: 2.2025736870666,
                  y: 48.71651169983
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9925fa42-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '22',
              polygon: [
                {
                  x: 2.2025536976558,
                  y: 48.716433286636
                },
                {
                  x: 2.2025536976558,
                  y: 48.716433286636
                },
                {
                  x: 2.2025536976558,
                  y: 48.716433286636
                },
                {
                  x: 2.2025536976558,
                  y: 48.716433286636
                },
                {
                  x: 2.2025536976558,
                  y: 48.716433286636
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99260161-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '18',
              polygon: [
                {
                  x: 2.202473740636,
                  y: 48.716119633826
                },
                {
                  x: 2.202473740636,
                  y: 48.716119633826
                },
                {
                  x: 2.202473740636,
                  y: 48.716119633826
                },
                {
                  x: 2.202473740636,
                  y: 48.716119633826
                },
                {
                  x: 2.202473740636,
                  y: 48.716119633826
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9926054b-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '20',
              polygon: [
                {
                  x: 2.2025137190213,
                  y: 48.716276460238
                },
                {
                  x: 2.2025137190213,
                  y: 48.716276460238
                },
                {
                  x: 2.2025137190213,
                  y: 48.716276460238
                },
                {
                  x: 2.2025137190213,
                  y: 48.716276460238
                },
                {
                  x: 2.2025137190213,
                  y: 48.716276460238
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99260935-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '25',
              polygon: [
                {
                  x: 2.202613666075,
                  y: 48.716668526208
                },
                {
                  x: 2.202613666075,
                  y: 48.716668526208
                },
                {
                  x: 2.202613666075,
                  y: 48.716668526208
                },
                {
                  x: 2.202613666075,
                  y: 48.716668526208
                },
                {
                  x: 2.202613666075,
                  y: 48.716668526208
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99261237-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_3',
              name: '19',
              polygon: [
                {
                  x: 2.2024937297975,
                  y: 48.716198047034
                },
                {
                  x: 2.2024937297975,
                  y: 48.716198047034
                },
                {
                  x: 2.2024937297975,
                  y: 48.716198047034
                },
                {
                  x: 2.2024937297975,
                  y: 48.716198047034
                },
                {
                  x: 2.2024937297975,
                  y: 48.716198047034
                }
              ],
              status: 'active',
              id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            }
          ],
          unavailabilities: {
            occasional: [],
            recurring: []
          },
          parkfares: {
            occasional: [],
            recurring: []
          },
          granted_points: {
            occasional: [],
            recurring: []
          },
          id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
          origin: 'PM',
          id_park_source: 'epaps_avenue_de_la_vauve_3',
          id_park_type: 2,
          name: 'Avenue de la Vauve 3',
          address: 'Avenue de la Vauve, Palaiseau',
          capacityMax: 18,
          latitude: 48.7167494,
          longitude: 2.2026917,
          polygon: [
            {
              x: 2.2028245201733,
              y: 48.717609245115
            },
            {
              x: 2.2029157525479,
              y: 48.717598627256
            },
            {
              x: 2.2025243144499,
              y: 48.716044856346
            },
            {
              x: 2.2024116156342,
              y: 48.716055474533
            },
            {
              x: 2.2028245201733,
              y: 48.717609245115
            }
          ],
          description: null,
          indoor: 0,
          max_height: 190,
          status: 'active',
          nb_pmr: 0,
          nb_charging_point: 0
        },
        {
          segments: [
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991d119a-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_1',
              name: '9',
              polygon: [
                {
                  x: 2.2019353508949,
                  y: 48.714261145998
                },
                {
                  x: 2.2019353508949,
                  y: 48.714261145998
                },
                {
                  x: 2.2019353508949,
                  y: 48.714261145998
                },
                {
                  x: 2.2019353508949,
                  y: 48.714261145998
                },
                {
                  x: 2.2019353508949,
                  y: 48.714261145998
                }
              ],
              status: 'active',
              id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991d334c-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_1',
              name: '6',
              polygon: [
                {
                  x: 2.2018629312515,
                  y: 48.713972674158
                },
                {
                  x: 2.2018629312515,
                  y: 48.713972674158
                },
                {
                  x: 2.2018629312515,
                  y: 48.713972674158
                },
                {
                  x: 2.2018629312515,
                  y: 48.713972674158
                },
                {
                  x: 2.2018629312515,
                  y: 48.713972674158
                }
              ],
              status: 'active',
              id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991d3951-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_1',
              name: '5',
              polygon: [
                {
                  x: 2.2018414735794,
                  y: 48.71388772508
                },
                {
                  x: 2.2018414735794,
                  y: 48.71388772508
                },
                {
                  x: 2.2018414735794,
                  y: 48.71388772508
                },
                {
                  x: 2.2018414735794,
                  y: 48.71388772508
                },
                {
                  x: 2.2018414735794,
                  y: 48.71388772508
                }
              ],
              status: 'active',
              id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991d3e7f-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_1',
              name: '8',
              polygon: [
                {
                  x: 2.2019031643867,
                  y: 48.714139032353
                },
                {
                  x: 2.2019031643867,
                  y: 48.714139032353
                },
                {
                  x: 2.2019031643867,
                  y: 48.714139032353
                },
                {
                  x: 2.2019031643867,
                  y: 48.714139032353
                },
                {
                  x: 2.2019031643867,
                  y: 48.714139032353
                }
              ],
              status: 'active',
              id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991d40e7-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_1',
              name: '2',
              polygon: [
                {
                  x: 2.2017583250999,
                  y: 48.71356562519
                },
                {
                  x: 2.2017583250999,
                  y: 48.71356562519
                },
                {
                  x: 2.2017583250999,
                  y: 48.71356562519
                },
                {
                  x: 2.2017583250999,
                  y: 48.71356562519
                },
                {
                  x: 2.2017583250999,
                  y: 48.71356562519
                }
              ],
              status: 'active',
              id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991d4b6e-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_1',
              name: '1',
              polygon: [
                {
                  x: 2.2017368674278,
                  y: 48.713471826482
                },
                {
                  x: 2.2017368674278,
                  y: 48.713471826482
                },
                {
                  x: 2.2017368674278,
                  y: 48.713471826482
                },
                {
                  x: 2.2017368674278,
                  y: 48.713471826482
                },
                {
                  x: 2.2017368674278,
                  y: 48.713471826482
                }
              ],
              status: 'active',
              id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991d5099-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_1',
              name: '3',
              polygon: [
                {
                  x: 2.2017824649811,
                  y: 48.713659423722
                },
                {
                  x: 2.2017824649811,
                  y: 48.713659423722
                },
                {
                  x: 2.2017824649811,
                  y: 48.713659423722
                },
                {
                  x: 2.2017824649811,
                  y: 48.713659423722
                },
                {
                  x: 2.2017824649811,
                  y: 48.713659423722
                }
              ],
              status: 'active',
              id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991d5631-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_1',
              name: '10',
              polygon: [
                {
                  x: 2.201954126358,
                  y: 48.714346094445
                },
                {
                  x: 2.201954126358,
                  y: 48.714346094445
                },
                {
                  x: 2.201954126358,
                  y: 48.714346094445
                },
                {
                  x: 2.201954126358,
                  y: 48.714346094445
                },
                {
                  x: 2.201954126358,
                  y: 48.714346094445
                }
              ],
              status: 'active',
              id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991d5659-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_1',
              name: '7',
              polygon: [
                {
                  x: 2.2018817067146,
                  y: 48.714054083556
                },
                {
                  x: 2.2018817067146,
                  y: 48.714054083556
                },
                {
                  x: 2.2018817067146,
                  y: 48.714054083556
                },
                {
                  x: 2.2018817067146,
                  y: 48.714054083556
                },
                {
                  x: 2.2018817067146,
                  y: 48.714054083556
                }
              ],
              status: 'active',
              id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '991d5dfc-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_avenue_de_la_vauve_1',
              name: '4',
              polygon: [
                {
                  x: 2.2018146514893,
                  y: 48.713806315412
                },
                {
                  x: 2.2018146514893,
                  y: 48.713806315412
                },
                {
                  x: 2.2018146514893,
                  y: 48.713806315412
                },
                {
                  x: 2.2018146514893,
                  y: 48.713806315412
                },
                {
                  x: 2.2018146514893,
                  y: 48.713806315412
                }
              ],
              status: 'active',
              id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            }
          ],
          unavailabilities: {
            occasional: [],
            recurring: []
          },
          parkfares: {
            occasional: [],
            recurring: []
          },
          granted_points: {
            occasional: [],
            recurring: []
          },
          id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
          origin: 'PM',
          id_park_source: 'epaps_avenue_de_la_vauve_1',
          id_park_type: 2,
          name: 'Avenue de la Vauve 1',
          address: 'Avenue de la Vauve, Palaiseau',
          capacityMax: 10,
          latitude: 48.7137692,
          longitude: 2.2018656,
          polygon: [
            {
              x: 2.201940715313,
              y: 48.714356712991
            },
            {
              x: 2.2020104527473,
              y: 48.714344324688
            },
            {
              x: 2.2017878293991,
              y: 48.713441740068
            },
            {
              x: 2.2017073631287,
              y: 48.713452358804
            },
            {
              x: 2.201940715313,
              y: 48.714356712991
            }
          ],
          description: null,
          indoor: 0,
          max_height: 190,
          status: 'active',
          nb_pmr: 0,
          nb_charging_point: 0
        },
        {
          segments: [
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992476ad-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_sebastienne_guyot',
              name: '9',
              polygon: [
                {
                  x: 2.1647238424361,
                  y: 48.710542086589
                },
                {
                  x: 2.1647238424361,
                  y: 48.710542086589
                },
                {
                  x: 2.1647238424361,
                  y: 48.710542086589
                },
                {
                  x: 2.1647238424361,
                  y: 48.710542086589
                },
                {
                  x: 2.1647238424361,
                  y: 48.710542086589
                }
              ],
              status: 'active',
              id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99247735-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_sebastienne_guyot',
              name: '8',
              polygon: [
                {
                  x: 2.1647229478566,
                  y: 48.710484860028
                },
                {
                  x: 2.1647229478566,
                  y: 48.710484860028
                },
                {
                  x: 2.1647229478566,
                  y: 48.710484860028
                },
                {
                  x: 2.1647229478566,
                  y: 48.710484860028
                },
                {
                  x: 2.1647229478566,
                  y: 48.710484860028
                }
              ],
              status: 'active',
              id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99247bfc-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_sebastienne_guyot',
              name: '7',
              polygon: [
                {
                  x: 2.164722053279,
                  y: 48.710427633467
                },
                {
                  x: 2.164722053279,
                  y: 48.710427633467
                },
                {
                  x: 2.164722053279,
                  y: 48.710427633467
                },
                {
                  x: 2.164722053279,
                  y: 48.710427633467
                },
                {
                  x: 2.164722053279,
                  y: 48.710427633467
                }
              ],
              status: 'active',
              id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992480d1-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_sebastienne_guyot',
              name: '6',
              polygon: [
                {
                  x: 2.164723179897,
                  y: 48.710287516516
                },
                {
                  x: 2.164723179897,
                  y: 48.710287516516
                },
                {
                  x: 2.164723179897,
                  y: 48.710287516516
                },
                {
                  x: 2.164723179897,
                  y: 48.710287516516
                },
                {
                  x: 2.164723179897,
                  y: 48.710287516516
                }
              ],
              status: 'active',
              id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992482fa-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_sebastienne_guyot',
              name: '5',
              polygon: [
                {
                  x: 2.1647213907376,
                  y: 48.710220260204
                },
                {
                  x: 2.1647213907376,
                  y: 48.710220260204
                },
                {
                  x: 2.1647213907376,
                  y: 48.710220260204
                },
                {
                  x: 2.1647213907376,
                  y: 48.710220260204
                },
                {
                  x: 2.1647213907376,
                  y: 48.710220260204
                }
              ],
              status: 'active',
              id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992484e3-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_sebastienne_guyot',
              name: '4',
              polygon: [
                {
                  x: 2.1647196015829,
                  y: 48.710153003891
                },
                {
                  x: 2.1647196015829,
                  y: 48.710153003891
                },
                {
                  x: 2.1647196015829,
                  y: 48.710153003891
                },
                {
                  x: 2.1647196015829,
                  y: 48.710153003891
                },
                {
                  x: 2.1647196015829,
                  y: 48.710153003891
                }
              ],
              status: 'active',
              id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '9924b525-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_sebastienne_guyot',
              name: '3',
              polygon: [
                {
                  x: 2.1647216059908,
                  y: 48.709992827213
                },
                {
                  x: 2.1647216059908,
                  y: 48.709992827213
                },
                {
                  x: 2.1647216059908,
                  y: 48.709992827213
                },
                {
                  x: 2.1647216059908,
                  y: 48.709992827213
                },
                {
                  x: 2.1647216059908,
                  y: 48.709992827213
                }
              ],
              status: 'active',
              id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99256495-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_sebastienne_guyot',
              name: '2',
              polygon: [
                {
                  x: 2.1647216059908,
                  y: 48.709930880254
                },
                {
                  x: 2.1647216059908,
                  y: 48.709930880254
                },
                {
                  x: 2.1647216059908,
                  y: 48.709930880254
                },
                {
                  x: 2.1647216059908,
                  y: 48.709930880254
                },
                {
                  x: 2.1647216059908,
                  y: 48.709930880254
                }
              ],
              status: 'active',
              id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '992566e2-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_sebastienne_guyot',
              name: '10',
              polygon: [
                {
                  x: 2.1647230318207,
                  y: 48.710630876112
                },
                {
                  x: 2.1647230318207,
                  y: 48.710630876112
                },
                {
                  x: 2.1647230318207,
                  y: 48.710630876112
                },
                {
                  x: 2.1647230318207,
                  y: 48.710630876112
                },
                {
                  x: 2.1647230318207,
                  y: 48.710630876112
                }
              ],
              status: 'active',
              id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            },
            {
              unavailabilities: {
                occasional: [],
                recurring: []
              },
              id_segment: '99256f44-d143-11e9-8218-10e7c648c7ad',
              id_park_source: 'epaps_rue_sebastienne_guyot',
              name: '1',
              polygon: [
                {
                  x: 2.1647216059908,
                  y: 48.709868933294
                },
                {
                  x: 2.1647216059908,
                  y: 48.709868933294
                },
                {
                  x: 2.1647216059908,
                  y: 48.709868933294
                },
                {
                  x: 2.1647216059908,
                  y: 48.709868933294
                },
                {
                  x: 2.1647216059908,
                  y: 48.709868933294
                }
              ],
              status: 'active',
              id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
              pmr: 0,
              charging_point: 0
            }
          ],
          unavailabilities: {
            occasional: [],
            recurring: []
          },
          parkfares: {
            occasional: [],
            recurring: []
          },
          granted_points: {
            occasional: [],
            recurring: []
          },
          id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
          origin: 'PM',
          id_park_source: 'epaps_rue_sebastienne_guyot',
          id_park_type: 2,
          name: 'Rue Sébastienne Guyot',
          address: 'Rue Sébastienne Guyot 91190 Gif-sur-Yvette',
          capacityMax: 10,
          latitude: 48.7103764,
          longitude: 2.1642205,
          polygon: [
            {
              x: 2.1647077623827,
              y: 48.709824159995
            },
            {
              x: 2.1647238645527,
              y: 48.710648934506
            },
            {
              x: 2.1648258449628,
              y: 48.710648934506
            },
            {
              x: 2.1648258449628,
              y: 48.709831239662
            },
            {
              x: 2.1647077623827,
              y: 48.709824159995
            }
          ],
          description: null,
          indoor: 0,
          max_height: 190,
          status: 'active',
          nb_pmr: 0,
          nb_charging_point: 0
        },
        {
          id_park: '7bad13f2-f185-11e9-bed9-10e7c648c7ad',
          origin: 'ZP',
          id_park_source: 'e04eee2c-35b1-47de-99cd-c713b1a9a752',
          id_park_type: 1,
          name: 'Gif-sur-Yvette - Paris Saclay - Parking CentraleSupélec Bouygues',
          address: '3 rue Joliot Curie - Gif-sur-Yvette - 91190',
          latitude: 48.7096008715891,
          longitude: 2.1687027994052,
          description: '<p>Ce parking est situé dans la zone du campus Paris Saclay. Il est moins de 400 mètres de l’arrêt de bus “Joliot Curie”.</p><p>Il fait partie du réseau de parkings partenaires du service Park\'In Saclay, plateforme qui permet de réserver facilement une place de stationnement sur le plateau de Saclay (plus de détails ci-dessous).</p><h3>À voir / À faire à proximité du parking Gif-sur-Yvette - Paris Saclay - Parking CentraleSupélec Bouygues</h3><p>Ce <strong>parking Gif-sur-Yvette</strong> est au coeur du campus Paris-Saclay, une zone reconnue pour son attractivité, sa modernité et son innovation. Il vous permettra de vous rendre en moins de 12 min de marche à Polytech Paris -Sud, au PUIO (Pôle Universitaire d’Ingénierie d’Orsay) et à l’IUT d’Orsay.</p><p>Le Carré des Sciences est à seulement 5 min de ce parking CentraleSupélec Bouygues.<br />Le laboratoire de génie électrique de Paris ainsi que le laboratoire de recherche en Informatique se trouvent, quant à eux, à 9 et 14 min à pied.</p><p>Vous logez dans la résidence Georges Sand ? Stationnez votre véhicule à moindre coût grâce à ce <strong>parking Paris Saclay</strong>. En journée, les gourmands pourront s’attabler au restaurant L’AtHome, Lulu la Frite ou chez Foodles, situés à 8, 10 et 15 min de marche, ou déjeuner sur le pouce au foodtruck Bud’s Deli.</p><p>Les sportifs pourront se rendre au complexe sportif du Moulon à 7 min de marche. Ils pratiqueront ainsi leur activité et se gareront sans prise de tête.</p><p>C’est le <strong>bon plan parking du campus Paris Saclay</strong> !</p><h3>Transports et routes à proximité du parking Gif-sur-Yvette - Paris Saclay - Parking CentraleSupélec Bouygues</h3><p>Transports : Joliot Curie (Bus 9, 91.06, 91)<br />Parking facilement accessible en empruntant la nationale N118 et les routes départementales D128 et D446.</p><p><em>Le quartier : Rue Noetzlin, Rue Sébastienne Guyot, Rue Francis Perrin, Rue Louis de Broglie, Rue Nicolas Appert, Rue John Von Neumann, Rue du Belvédère.</em></p><p>En savoir plus sur Park\'In Saclay :</p><p>L’établissement public d’aménagement Paris-Saclay développe et expérimente en partenariat avec Mobility By Colas, Zenpark et ParkingMap une solution de stationnement intelligente à l’échelle du plateau.<br />Le service Park’In Saclay permet aux usagers du territoire de réserver facilement une place de stationnement au sein des parkings partenaires.</p>',
          indoor: 1,
          max_height: 0,
          capacityMax: null,
          status: 'active',
          underground: 1,
          video_surveillance: 0,
          main_photo: null,
          valet: 0,
          guarded: 0,
          pedestrian_friendly: 1,
          lighted: 1,
          photo_urls: []
        },
        {
          id_park: '9de8e232-d143-11e9-8218-10e7c648c7ad',
          origin: 'ZP',
          id_park_source: '367dfd82-85f0-450a-9d48-b8142dd66a5e',
          id_park_type: 1,
          name: 'Hotel P24',
          address: '12 rue de la Goutte d\'Or - Paris - 75018',
          latitude: 48.711889,
          longitude: 2.206583,
          description: '<p>Ce <strong>parking</strong> est situé à Barbès dans le 18e arrondissement de Paris, à 5 min à pied de la station de métro Barbès - Rochechouart. Il se trouve à l’intersection de la rue de la Goutte d’Or et du boulevard Barbès. </p><h3>À voir / À faire à proximité du parking Barbès - SAEMES</h3><p>L’école Polyvalente Goutte d’Or se situe à 2 min à pied de ce <strong>parking Barbès</strong>. Les étudiants pourront se rendre à leur cours à moindre coût grâce à ce <strong>parking</strong>. Les parents pourront également emmener leurs enfants à l’école maternelle Saint-Luc qui se situe à 1 min à pied. </p><p>L’hôpital Lariboisière se trouve à 8 min à pied. Ceux qui souhaitent s’y rendre rapidement, pourront le faire avec facilité avec ce <strong>parking Paris 75018</strong>. </p><p>De nombreux hôtels se trouvent à moins de 10 min à pied de ce <strong>parking Barbes Rochechouart</strong>. Ceux qui le souhaitent, pourront trouver Best Western hôtel, hôtel Pax, hôtel Sofia ou encore hôtel Montmartre Clignancourt à proximité. C’est le <strong>bon plan parking Paris 18eme</strong> qui permet de se garer en toute sérénité et se rendre dans un de ces hôtels. </p><p>Les plus gourmands seront ravis de trouver de nombreux restaurants tels que Gigi, Lüük, el Andalousia, le Dibi ou encore la Montmartroise. Ils se situent à moins de 8 min à pied de ce<strong> parking Barbes</strong>. Ils pourront garer leur véhicule rapidement et profiter du moment pour satisfaire leurs papilles. </p><p>Les amoureux de la nature seront enchantés de se rendre au square Léon. Ils pourront également se promener au square Louise Michel, situé à 12 min à pied de ce <strong>parking Barbès Rochechouart</strong>. Ce parc d’une superficie de 23 737 m² commence au pied de la basilique du Sacré-Coeur et descend place Saint-Pierre. </p><p>Le cinéma Louxor se trouve à 6 min à pied de ce <strong>parking Paris 18e</strong>. Les cinéphiles seront ravis de s’y rendre rapidement et de pouvoir profiter pleinement de leur séance. </p><p>Côté pratique, la préfecture de police de Paris, la Poste, la bibliothèque Goutte d’Or et de nombreuses banques se trouvent à 3 min à pied de ce <strong>parking Paris 18ème</strong>. </p><h3>Transports et routes à proximité du parking Barbès - SAEMES</h3><p>Transports à proximité : Barbès - Rochechouart (métro 2, 4), Saint-Bruno (bus 302), Place de la Chapelle (bus 35, 48, 65, 302, 350, N43) </p><p>En voiture : N1, D24, D114, D20, N3 </p><p><em>Le quartier : Boulevard de la Chapelle, boulevard Barbès, rue de la Goutte d’Or, rue de Clignancourt, boulevard de Magenta, rue de Jessaint</em> </p>',
          indoor: 1,
          max_height: 220,
          capacityMax: null,
          status: 'active',
          underground: 1,
          video_surveillance: 1,
          main_photo: 'https://zenithdev.blob.core.windows.net/parking-photos/367dfd82-85f0-450a-9d48-b8142dd66a5e/5c4fc9d8-eaaa-40bf-bdbe-0752a82c3cb0.jpeg',
          valet: 0,
          guarded: 0,
          pedestrian_friendly: 0,
          lighted: 1,
          photo_urls: [
            'https://zenithdev.blob.core.windows.net/parking-photos/367dfd82-85f0-450a-9d48-b8142dd66a5e/a8c2cee6-ae5c-43d7-ad65-e23391d8cf01.jpeg',
            'https://zenithdev.blob.core.windows.net/parking-photos/367dfd82-85f0-450a-9d48-b8142dd66a5e/5c4fc9d8-eaaa-40bf-bdbe-0752a82c3cb0.jpeg'
          ],
          url: 2
        },
        {
          id_park: '9de9904e-d143-11e9-8218-10e7c648c7ad',
          origin: 'ZP',
          id_park_source: '53f79aa4-98b0-4b6c-9eea-4190d823b828',
          id_park_type: 1,
          name: 'Hotel BnB',
          address: '130 rue Les Enfants du Paradis - Boulogne-Billancourt - 92100',
          latitude: 48.714889,
          longitude: 2.171111,
          description: '<p>Ce <strong>parking </strong>est situé à deux pas de la Porte de Saint-Cloud à Boulogne-Billancourt, à l\'est de Paris. Il est à 3 min à pied de l\'arrêt de bus Les Peupliers et à 2 min en voiture de la départementale D1. Il se trouve à l\'intersection de la rue des Peupliers et de la rue casque d\'Or.&nbsp;</p><h3>À voir / À faire à proximité du parking Porte de Saint-Cloud - Mercure</h3><p>Les plus gourmands se régaleront dans les nombreux restaurants situés à une dizaine de minutes à pied de ce&nbsp;<strong>parking Coubertin</strong>&nbsp;: A&amp;M, Au Trinquet, Vin &amp; Marée Murat Exelmans, restaurant Iannello. Ils pourront garer leur voiture rapidement et satisfaire leurs papilles.</p><p></p><p>À proximité de ce&nbsp;<strong>parking porte de Saint-Cloud</strong>, se trouvent le stade Pierre de Coubertin et le Tennis Club de Paris. On peut également trouver le quartier de bureaux du Point du Jour où sont présentes de nombreuses entreprises telles que : TF1, C8, CNews, Boursorama, Colas, CMG, HP.</p><p>Les amoureux de la nature apprécieront se balader le long du quai Saint-Exupéry et du quai du Point du Jour. Ils se trouvent à 5 min à pied de ce <strong>parking à proximité de Paris</strong>. C\'est le bon plan parking Saint-Cloud pour se garer facilement et en toute sérénité.&nbsp;</p><p>Les fans de sports seront ravis de trouver le parc des Princes à 12 min à pied du<strong> parking Boulogne-Billancourt</strong>. Ils pourront également trouver le stade Jean Bouin qui se situe à 15 min à pied de ce parking Boulogne.&nbsp;</p><h3>Transports et routes à proximité du parking Porte de Saint-Cloud - Mercure</h3><p>Transport à proximité : Porte de Saint-Cloud (métro 9), Marcel Sembat (métro 9), Les Peupliers (bus 289), Pierre de Coubertin (bus 189)<br />En voiture : A13, D1, D7, D50, D910, D907, D101</p><p><em>Le quartier : avenue le Jour Se Lève, rue des Peupliers, rue du Point du Jour, avenue de la Voie Lactée, avenue Pierre Grenier, boulevard de la République, rue du Fief</em></p>',
          indoor: 1,
          max_height: 190,
          capacityMax: null,
          status: 'active',
          underground: 1,
          video_surveillance: 0,
          main_photo: 'https://zenithdev.blob.core.windows.net/parking-photos/53f79aa4-98b0-4b6c-9eea-4190d823b828/5a316327-d3b3-4b30-9f50-78f08b23f8e7.jpeg',
          valet: 0,
          guarded: 0,
          pedestrian_friendly: 1,
          lighted: 1,
          photo_urls: [
            'https://zenithdev.blob.core.windows.net/parking-photos/53f79aa4-98b0-4b6c-9eea-4190d823b828/c7e85b5a-5038-46dd-b37a-b8d972e6bfce.jpeg',
            'https://zenithdev.blob.core.windows.net/parking-photos/53f79aa4-98b0-4b6c-9eea-4190d823b828/4e114fc1-5c1a-4446-9c66-e3f2386a3233.jpeg',
            'https://zenithdev.blob.core.windows.net/parking-photos/53f79aa4-98b0-4b6c-9eea-4190d823b828/7b02b58c-47d2-4e97-b5e7-42ba1e4587cf.jpeg',
            'https://zenithdev.blob.core.windows.net/parking-photos/53f79aa4-98b0-4b6c-9eea-4190d823b828/5a316327-d3b3-4b30-9f50-78f08b23f8e7.jpeg'
          ],
          url: 4
        },
        {
          id_park: '9df76158-d143-11e9-8218-10e7c648c7ad',
          origin: 'ZP',
          id_park_source: '7112b5ec-4d94-421f-911c-f3026b1ad8c1',
          id_park_type: 1,
          name: 'Digiteo',
          address: '38 boulevard de Bercy - Paris - 75012',
          latitude: 48.712278,
          longitude: 2.167111,
          description: '<p>Ce parking est situé dans le <strong>12ème arrondissement</strong> de Paris, à proximité de la Gare de Bercy et du quai de Bercy.</p><h3>À voir / À faire à proximité du parking Bercy - Gare de Lyon<br /></h3><p>A 11 min à pied de la <strong>Gare de Lyon</strong>, ce <strong>parking à Bercy</strong> est le bon plan pour vous rendre à la <strong>Gare de Bercy</strong>, aux concerts à l\'<strong>AccorHotels Arena</strong> (ex-Bercy Arena, ex-POPB, Palais Omnisport de Paris Bercy) ou au Parc de Bercy. Pensez au <strong>parking Bercy - Gare de Lyon</strong> si vous souhaitez visiter la Cinémathèque Française ou vous rendre sur les péniches ou barges du Port de Bercy et du Port de la Gare.</p><p>Le Quai de la Gare et le Quai François Mauriac sont situés à une dizaine de minutes à pied du parking via la&nbsp;Passerelle Simone-de-Beauvoir. Vous y trouverez la piscine Joséphine-Baker, le Petit Bain ou encore La Dame de Canton.</p><p></p><p>Le campus de l\'incubateur de start-up StationF est également accessible en moins de 10 minutes de ce parking en transports en commun (Ligne 14 du métro).</p><p>Pour vos voyages, la Gare de Bercy&nbsp;(Auto-train, Intercité, TER et iDBUS) est à 3 minutes à pied et la Gare de Lyon à 11 minutes à pied et 6 minutes en métro du <strong>parking Bercy</strong> - Gare de Lyon.</p><h3>Transports et routes à proximité du parking Bercy - Gare de Lyon :</h3><p>Parking facilement accessible depuis l\'<strong>autoroute A4</strong> (autoroute de l\'Est - Porte de Bercy).</p><p><strong>Stations de métro </strong>à proximité du parking : Bercy (lignes 6 et 14), Quai de la Gare (ligne 6), Dugommier (ligne 6), Gare de Lyon (lignes 1 et 14, RER A, RER D)</p>',
          indoor: 1,
          max_height: 190,
          capacityMax: null,
          status: 'active',
          underground: 1,
          video_surveillance: 0,
          main_photo: 'https://zenithdev.blob.core.windows.net/parking-photos/7112b5ec-4d94-421f-911c-f3026b1ad8c1/79d24545-2c60-46bb-ad04-292bcd0a6d14.jpeg',
          valet: 0,
          guarded: 0,
          pedestrian_friendly: 0,
          lighted: 1,
          photo_urls: [
            'https://zenithdev.blob.core.windows.net/parking-photos/7112b5ec-4d94-421f-911c-f3026b1ad8c1/99c268aa-c91f-4450-93dd-a55aa11d0aff.jpeg',
            'https://zenithdev.blob.core.windows.net/parking-photos/7112b5ec-4d94-421f-911c-f3026b1ad8c1/79d24545-2c60-46bb-ad04-292bcd0a6d14.jpeg'
          ],
          url: 2
        },
        {
          id_park: '9dfce813-d143-11e9-8218-10e7c648c7ad',
          origin: 'ZP',
          id_park_source: 'a6925b5b-8d3c-4d35-a032-d2420cc59aec',
          id_park_type: 1,
          name: 'Palaiseau - Paris Saclay - Parking visiteurs EDF',
          address: '7 boulevard Gaspard Monge - Palaiseau - 91120',
          latitude: 48.7149085525818,
          longitude: 2.19628139529118,
          description: '<p>Ce parking est situé dans la zone du campus Paris Saclay à Palaiseau. Il est juste en face de la station de bus (91-06) Palaiseau Campus.</p><p>Il fait partie du réseau de parkings partenaires du service Park\'In Saclay, plateforme qui permet de réserver facilement une place de stationnement sur le plateau de Saclay (plus de détails ci-dessous).</p><h3>À voir / À faire à proximité du parking Palaiseau - Paris Saclay - Parking visiteurs EDF</h3><p>Reconnu comme étant le plus grand centre industriel de recherche et de formation d’Europe, le campus de Paris Saclay est une zone particulièrement attractive et dynamique. Ce parking visiteurs EDF vous permettra notamment de vous rendre à l’EDF Lab : le nouveau centre de la recherche et du développement en énergie d’EDF.</p><p>Vous trouverez sur place de nombreux établissements d’enseignement à moins de 15 min à pied tels que l’Institut d’Optique, l’École Polytechnique et l’École Polytechnique Binet Oenologie, situés à moins de 15 min de marche.</p><p>Par ailleurs, plusieurs centres de recherches se trouvent non loin du <strong>parking Campus Paris Saclay</strong> : Thales Research &amp; Technology, Mixed Unit of Physics - CNRS Thalès, Danone Research et Horiba Europe Research Center, respectivement à 5, 6, 10 et 11 min à pied.</p><p>Vous logez dans la résidence étudiante Jean d’Ormesson ou dans la résidence Alexandre Manceau ? Ce parking Paris Saclay vous permettra de vous garer à deux pas de votre logement. Pour le déjeuner ou le dîner, rendez-vous dans les restaurants du quartier tels que Panifique ou encore Iroise. Tous deux sont à moins 5 min de marche du parking. Besoin de retirer de l’argent ? La BNP Paribas Paris Saclay est à 5 min à pied.</p><p>C’est le <strong>bon plan parking Paris Saclay</strong> !</p><h3>Transports et routes à proximité du parking Palaiseau - Paris Saclay - Parking visiteurs EDF</h3><p>Transports : Gare de Massy-Palaiseau (RER B), Palaiseau Campus (Bus 91-06)<br />Parking facilement accessible en empruntant les routes départementales D128 et D36.</p><p><em>Le quartier : Avenue de la Vauve, Rue Rosalind Franklin, Boulevard Thomas Gobert, Avenue Augustin Fresnel, Boulevard des Maréchaux, Avenue Chasles.</em></p><p>En savoir plus sur Park\'In Saclay : L’établissement public d’aménagement Paris-Saclay développe et expérimente en partenariat avec Mobility By Colas, Zenpark et ParkingMap une solution de stationnement intelligente à l’échelle du plateau. Le service Park’In Saclay permet aux usagers du territoire de réserver facilement une place de stationnement au sein des parkings partenaires.</p>',
          indoor: 0,
          max_height: 500,
          capacityMax: null,
          status: 'active',
          underground: 0,
          video_surveillance: 1,
          main_photo: 'https://zenithdev.blob.core.windows.net/parking-photos/a6925b5b-8d3c-4d35-a032-d2420cc59aec/3632b803-e0a5-45a1-af0a-6efb239ef7ca.jpeg',
          valet: 0,
          guarded: 0,
          pedestrian_friendly: 1,
          lighted: 1,
          photo_urls: [
            'https://zenithdev.blob.core.windows.net/parking-photos/a6925b5b-8d3c-4d35-a032-d2420cc59aec/3632b803-e0a5-45a1-af0a-6efb239ef7ca.jpeg',
            'https://zenithdev.blob.core.windows.net/parking-photos/a6925b5b-8d3c-4d35-a032-d2420cc59aec/04d2f095-ac99-4678-bab9-d3b009027915.jpeg'
          ],
          url: 2
        },
        {
          id_park: '9e010603-d143-11e9-8218-10e7c648c7ad',
          origin: 'ZP',
          id_park_source: 'df1c9eba-99f7-49d4-9275-16acbfd60ffc',
          id_park_type: 1,
          name: 'Residence Emilie du Chatelet',
          address: '40 rue du Commandant René Mouchotte - Paris - 75014',
          latitude: 48.709639,
          longitude: 2.17,
          description: '<p>Ce <strong>parking</strong> est situé dans le 14ème arrondissement de Paris. C\'est le bon plan pour vous rendre à la Gare Montparnasse ou à la Tour Montparnasse.</p><p>Ce parking est idéal si vous êtes à la recherche d’un&nbsp; <strong>parking salon de l’agriculture</strong> &nbsp;ou d’un&nbsp; <strong>parking foire de Paris</strong> </p><p></p><h3>À voir / À faire à proximité du parking Gare Montparnasse - Concorde</h3><p>L\'accès à la gare Montparnasse (Montparnasse 2 - Pasteur) est à 4 minutes à pied. Un bon plan <strong>parking Montparnasse</strong> pour ceux qui partent en voyage et souhaitent laisser leur véhicule dans un endroit sûr, le temps d’un week-end ou d’une plus longue période. </p><p>La tour Montparnasse (8 min à pied) et le cinéma Gaumont (11 min à pied) se trouvent à quelques mètres de ce <strong>parking Paris 14</strong>. De nombreux hôtels sont également situés à proximité du parking : hôtel Novotel, hôtel Catalogne, hôtel Cactus... De quoi ravir ceux qui sont de passage dans la capitale. <br /></p><p>Nos membres aiment ce <strong>parking Gaité Montparnasse</strong> pour sa proximité avec la rue de la Gaité et ses théâtres et salles de spectacle (Bobino, le théâtre de la Gaîté-Montparnasse, le théâtre Montparnasse, le Petit Montparnasse, le théâtre Rive-Gauche, la Comédie Italienne, le Guichet Montparnasse, le Théâtre d\'Edgar, le Petit Journal Montparnasse, ...). Une excellente situation géographique qui profite à tous. </p><p>Côté pratique, le Musée du Général Leclerc de Hauteclocque et de la Libération de Paris (6 min à pied), le Jardin Atlantique (4 min à pied) et le cimetière Montparnasse (10 min à pied) qui abritent de nombreuses personnalités sont à quelques minutes du <strong>parking Gare Montparnasse</strong>. </p><h3>Transports et routes à proximité du parking Gare Montparnasse - Concorde</h3><p>Stations de métro à proximité : Gaité et Pernety (ligne 13), Montparnasse - Bienvenüe (lignes 4, 6, 12, 13), Edgar Quinet (ligne 6), Pasteur (lignes 6 et 12) </p><p><em>Le quartier : Place de Catalogne, Boulevard Pasteur, Avenue du Maine, Rue de la Gaité, Rue du Château, Rue Raymond Losserand, Boulevard de Vaugirard, Rue du Cotentin, Rue du Départ, Rue de l\'Arrivée, Rue de l\'Ouest, Boulevard Edgar Quinet, Boulevard du Montparnasse. </em></p>',
          indoor: 1,
          max_height: 180,
          capacityMax: null,
          status: 'active',
          underground: 1,
          video_surveillance: 0,
          main_photo: 'https://zenithdev.blob.core.windows.net/parking-photos/df1c9eba-99f7-49d4-9275-16acbfd60ffc/dfd42abf-3c58-456e-837f-f0a9d7853174.jpeg',
          valet: 0,
          guarded: 0,
          pedestrian_friendly: 1,
          lighted: 1,
          photo_urls: [
            'https://zenithdev.blob.core.windows.net/parking-photos/df1c9eba-99f7-49d4-9275-16acbfd60ffc/e6beb476-fcc1-4eab-81f3-62dcf79c9ae0.jpeg',
            'https://zenithdev.blob.core.windows.net/parking-photos/df1c9eba-99f7-49d4-9275-16acbfd60ffc/38ddf7ee-be72-45cf-8807-f2fda213220c.jpeg',
            'https://zenithdev.blob.core.windows.net/parking-photos/df1c9eba-99f7-49d4-9275-16acbfd60ffc/dfd42abf-3c58-456e-837f-f0a9d7853174.jpeg'
          ],
          url: 3
        }
      ]
    );
  }

  getFreePlaces(): Observable<Freeplace[]> {
    // return this.http.get<Freeplace[]>(`${env.SERVER_URL}/park/freeplaces`);
    return of([
      {
        segments: [
          '71337c6d-f185-11e9-bed9-10e7c648c7ad'
        ],
        id_park: '711a6343-f185-11e9-bed9-10e7c648c7ad',
        id_park_source: 'epaps_parking_chemin_du_moulon',
        origin: 'PM',
        id_park_type: 2,
        nb_pmr_available: 0,
        nb_charging_point: 0,
        availability: 1,
        is_updated: 1
      },
      {
        segments: [
          '991b7e70-d143-11e9-8218-10e7c648c7ad',
          '991b84a0-d143-11e9-8218-10e7c648c7ad',
          '991bba06-d143-11e9-8218-10e7c648c7ad'
        ],
        id_park: '98f6d207-d143-11e9-8218-10e7c648c7ad',
        id_park_source: 'epaps_avenue_de_la_vauve_2',
        origin: 'PM',
        id_park_type: 2,
        nb_pmr_available: 0,
        nb_charging_point: 0,
        availability: 3,
        is_updated: 1
      },
      {
        segments: [
          '99261a4a-d143-11e9-8218-10e7c648c7ad',
          '99263515-d143-11e9-8218-10e7c648c7ad',
          '99266057-d143-11e9-8218-10e7c648c7ad',
          '99266931-d143-11e9-8218-10e7c648c7ad',
          '9926b92a-d143-11e9-8218-10e7c648c7ad',
          '9926c00d-d143-11e9-8218-10e7c648c7ad',
          '9926c922-d143-11e9-8218-10e7c648c7ad',
          '99515099-d143-11e9-8218-10e7c648c7ad',
          '99515c44-d143-11e9-8218-10e7c648c7ad',
          '99516577-d143-11e9-8218-10e7c648c7ad',
          '99516a42-d143-11e9-8218-10e7c648c7ad'
        ],
        id_park: '98f6e73e-d143-11e9-8218-10e7c648c7ad',
        id_park_source: 'epaps_rue_joliot_curie',
        origin: 'PM',
        id_park_type: 2,
        nb_pmr_available: 0,
        nb_charging_point: 0,
        availability: 11,
        is_updated: 1
      },
      {
        segments: [
          '992c8b8a-d143-11e9-8218-10e7c648c7ad',
          '992c8e4a-d143-11e9-8218-10e7c648c7ad',
          '992c92fe-d143-11e9-8218-10e7c648c7ad',
          '99472956-d143-11e9-8218-10e7c648c7ad',
          '995c9046-d143-11e9-8218-10e7c648c7ad',
          '995c9e4e-d143-11e9-8218-10e7c648c7ad',
          '995cc6ae-d143-11e9-8218-10e7c648c7ad',
          '995ccc18-d143-11e9-8218-10e7c648c7ad',
          '995cd341-d143-11e9-8218-10e7c648c7ad',
          '995cd847-d143-11e9-8218-10e7c648c7ad',
          '995d2d12-d143-11e9-8218-10e7c648c7ad',
          '995d6a95-d143-11e9-8218-10e7c648c7ad',
          '995e18a4-d143-11e9-8218-10e7c648c7ad',
          '995e1f27-d143-11e9-8218-10e7c648c7ad',
          '995e27b1-d143-11e9-8218-10e7c648c7ad',
          '995e628e-d143-11e9-8218-10e7c648c7ad',
          '995e8461-d143-11e9-8218-10e7c648c7ad',
          '995e8e22-d143-11e9-8218-10e7c648c7ad',
          '995e9572-d143-11e9-8218-10e7c648c7ad'
        ],
        id_park: '98f732d3-d143-11e9-8218-10e7c648c7ad',
        id_park_source: 'epaps_boulevard_thomas_gobert',
        origin: 'PM',
        id_park_type: 2,
        nb_pmr_available: 0,
        nb_charging_point: 0,
        availability: 19,
        is_updated: 1
      },
      {
        segments: [
          '99257da2-d143-11e9-8218-10e7c648c7ad',
          '992581d2-d143-11e9-8218-10e7c648c7ad',
          '99258391-d143-11e9-8218-10e7c648c7ad',
          '9925b5a4-d143-11e9-8218-10e7c648c7ad',
          '9925b9d4-d143-11e9-8218-10e7c648c7ad',
          '9925bc38-d143-11e9-8218-10e7c648c7ad',
          '9925c187-d143-11e9-8218-10e7c648c7ad',
          '9925c434-d143-11e9-8218-10e7c648c7ad',
          '9925c772-d143-11e9-8218-10e7c648c7ad',
          '9925cabd-d143-11e9-8218-10e7c648c7ad',
          '9925e526-d143-11e9-8218-10e7c648c7ad',
          '9925e840-d143-11e9-8218-10e7c648c7ad',
          '9925f50a-d143-11e9-8218-10e7c648c7ad',
          '9925fa42-d143-11e9-8218-10e7c648c7ad',
          '9926054b-d143-11e9-8218-10e7c648c7ad',
          '99261237-d143-11e9-8218-10e7c648c7ad'
        ],
        id_park: '98f744cb-d143-11e9-8218-10e7c648c7ad',
        id_park_source: 'epaps_avenue_de_la_vauve_3',
        origin: 'PM',
        id_park_type: 2,
        nb_pmr_available: 0,
        nb_charging_point: 0,
        availability: 16,
        is_updated: 1
      },
      {
        segments: [
          '991d334c-d143-11e9-8218-10e7c648c7ad',
          '991d40e7-d143-11e9-8218-10e7c648c7ad'
        ],
        id_park: '98f75cc6-d143-11e9-8218-10e7c648c7ad',
        id_park_source: 'epaps_avenue_de_la_vauve_1',
        origin: 'PM',
        id_park_type: 2,
        nb_pmr_available: 0,
        nb_charging_point: 0,
        availability: 2,
        is_updated: 1
      },
      {
        segments: [
          '992484e3-d143-11e9-8218-10e7c648c7ad'
        ],
        id_park: '98f77b61-d143-11e9-8218-10e7c648c7ad',
        id_park_source: 'epaps_rue_sebastienne_guyot',
        origin: 'PM',
        id_park_type: 2,
        nb_pmr_available: 0,
        nb_charging_point: 0,
        availability: 1,
        is_updated: 1
      },
      {
        id_park: '7bad13f2-f185-11e9-bed9-10e7c648c7ad',
        id_park_source: 'e04eee2c-35b1-47de-99cd-c713b1a9a752',
        origin: 'ZP',
        id_park_type: 1,
        availability: 35,
        is_updated: 1
      },
      {
        id_park: '9de8e232-d143-11e9-8218-10e7c648c7ad',
        id_park_source: '367dfd82-85f0-450a-9d48-b8142dd66a5e',
        origin: 'ZP',
        id_park_type: 1,
        availability: 0,
        is_updated: 1
      },
      {
        id_park: '9de9904e-d143-11e9-8218-10e7c648c7ad',
        id_park_source: '53f79aa4-98b0-4b6c-9eea-4190d823b828',
        origin: 'ZP',
        id_park_type: 1,
        availability: 0,
        is_updated: 1
      },
      {
        id_park: '9df76158-d143-11e9-8218-10e7c648c7ad',
        id_park_source: '7112b5ec-4d94-421f-911c-f3026b1ad8c1',
        origin: 'ZP',
        id_park_type: 1,
        availability: 28,
        is_updated: 1
      },
      {
        id_park: '9dfce813-d143-11e9-8218-10e7c648c7ad',
        id_park_source: 'a6925b5b-8d3c-4d35-a032-d2420cc59aec',
        origin: 'ZP',
        id_park_type: 1,
        availability: 58,
        is_updated: 1
      },
      {
        id_park: '9e010603-d143-11e9-8218-10e7c648c7ad',
        id_park_source: 'df1c9eba-99f7-49d4-9275-16acbfd60ffc',
        origin: 'ZP',
        id_park_type: 1,
        availability: 18,
        is_updated: 1
      }
    ]);
  }
}
