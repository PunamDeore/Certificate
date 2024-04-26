import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CertificateData} from '../models';
import {CertificateDataRepository} from '../repositories';

export class CertificateControllerController {
  constructor(
    @repository(CertificateDataRepository)
    public certificateDataRepository : CertificateDataRepository,
  ) {}

  @post('/certificate-data')
  @response(200, {
    description: 'CertificateData model instance',
    content: {'application/json': {schema: getModelSchemaRef(CertificateData)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CertificateData, {
            title: 'NewCertificateData',
            
          }),
        },
      },
    })
    certificateData: CertificateData,
  ): Promise<CertificateData> {
    return this.certificateDataRepository.create(certificateData);
  }

  @get('/certificate-data/count')
  @response(200, {
    description: 'CertificateData model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CertificateData) where?: Where<CertificateData>,
  ): Promise<Count> {
    return this.certificateDataRepository.count(where);
  }

  @get('/certificate-data')
  @response(200, {
    description: 'Array of CertificateData model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CertificateData, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CertificateData) filter?: Filter<CertificateData>,
  ): Promise<CertificateData[]> {
    return this.certificateDataRepository.find(filter);
  }

  @patch('/certificate-data')
  @response(200, {
    description: 'CertificateData PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CertificateData, {partial: true}),
        },
      },
    })
    certificateData: CertificateData,
    @param.where(CertificateData) where?: Where<CertificateData>,
  ): Promise<Count> {
    return this.certificateDataRepository.updateAll(certificateData, where);
  }

  @get('/certificate-data/{id}')
  @response(200, {
    description: 'CertificateData model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CertificateData, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CertificateData, {exclude: 'where'}) filter?: FilterExcludingWhere<CertificateData>
  ): Promise<CertificateData> {
    return this.certificateDataRepository.findById(id, filter);
  }

  @patch('/certificate-data/{id}')
  @response(204, {
    description: 'CertificateData PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CertificateData, {partial: true}),
        },
      },
    })
    certificateData: CertificateData,
  ): Promise<void> {
    await this.certificateDataRepository.updateById(id, certificateData);
  }

  @put('/certificate-data/{id}')
  @response(204, {
    description: 'CertificateData PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() certificateData: CertificateData,
  ): Promise<void> {
    await this.certificateDataRepository.replaceById(id, certificateData);
  }

  @del('/certificate-data/{id}')
  @response(204, {
    description: 'CertificateData DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.certificateDataRepository.deleteById(id);
  }
}
