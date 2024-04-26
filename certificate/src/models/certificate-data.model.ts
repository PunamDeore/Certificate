import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CertificateData extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  certificate: string;

  @property({
    type: 'string',
    required: true,
  })
  companyLogo: string;

  @property({
    type: 'string',
    required: true,
  })
  certificateLogo: string;

  @property({
    type: 'string',
    required: true,
  })
  recipientName: string;

  @property({
    type: 'string',
    required: true,
  })
  courseName: string;

  @property({
    type: 'string',
    required: true,
  })
  completionDate: string;

  @property({
    type: 'string',
    required: true,
  })
  presidentSignature: string;

  @property({
    type: 'string',
  })
  directorSignature?: string;

  @property({
    type: 'string',
    required: true,
  })
  orgName: string;

  @property({
    type: 'string',
    required: true,
  })
  orgAddress: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CertificateData>) {
    super(data);
  }
}

export interface CertificateDataRelations {
  // describe navigational properties here
}

export type CertificateDataWithRelations = CertificateData & CertificateDataRelations;
