import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {CertificateData, CertificateDataRelations} from '../models';

export class CertificateDataRepository extends DefaultCrudRepository<
  CertificateData,
  typeof CertificateData.prototype.certificate,
  CertificateDataRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CertificateData, dataSource);
  }
}
