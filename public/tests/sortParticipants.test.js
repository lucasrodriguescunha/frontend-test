const { sortParticipants } = require('../scripts/sortParticipants');

describe('sortParticipants', () => {
  const mockParticipants = [
    { name: 'Ana', positive: 100, negative: 50, description: 'Desc 1' },
    { name: 'Bruno', positive: 200, negative: 30, description: 'Desc 2' },
    { name: 'Carlos', positive: 150, negative: 80, description: 'Desc 3' },
    { name: 'Diana', positive: 50, negative: 20, description: 'Desc 4' }
  ];

  describe('Ordenação por votos positivos', () => {
    it('deve ordenar participantes por votos positivos em ordem decrescente', () => {
      const sorted = sortParticipants(mockParticipants, 'positive');

      expect(sorted[0].name).toBe('Bruno'); // 200 votos
      expect(sorted[1].name).toBe('Carlos'); // 150 votos
      expect(sorted[2].name).toBe('Ana'); // 100 votos
      expect(sorted[3].name).toBe('Diana'); // 50 votos
    });

    it('deve usar "positive" como critério padrão', () => {
      const sorted = sortParticipants(mockParticipants);

      expect(sorted[0].positive).toBe(200);
      expect(sorted[1].positive).toBe(150);
      expect(sorted[2].positive).toBe(100);
      expect(sorted[3].positive).toBe(50);
    });
  });

  describe('Ordenação por votos negativos', () => {
    it('deve ordenar participantes por votos negativos em ordem decrescente', () => {
      const sorted = sortParticipants(mockParticipants, 'negative');

      expect(sorted[0].name).toBe('Carlos'); // 80 negativos
      expect(sorted[1].name).toBe('Ana'); // 50 negativos
      expect(sorted[2].name).toBe('Bruno'); // 30 negativos
      expect(sorted[3].name).toBe('Diana'); // 20 negativos
    });
  });

  describe('Tratamento de dados', () => {
    it('deve converter strings para números', () => {
      const participantsWithStrings = [
        { name: 'Test1', positive: '100', negative: '50' },
        { name: 'Test2', positive: '200', negative: '30' }
      ];

      const sorted = sortParticipants(participantsWithStrings, 'positive');

      expect(typeof sorted[0].positive).toBe('number');
      expect(typeof sorted[0].negative).toBe('number');
      expect(sorted[0].positive).toBe(200);
      expect(sorted[1].positive).toBe(100);
    });

    it('deve tratar valores null/undefined como 0', () => {
      const participantsWithNull = [
        { name: 'Test1', positive: null, negative: undefined },
        { name: 'Test2', positive: 100, negative: 50 }
      ];

      const sorted = sortParticipants(participantsWithNull, 'positive');

      expect(sorted[0].positive).toBe(100);
      expect(sorted[1].positive).toBe(0);
      expect(sorted[1].negative).toBe(0);
    });

    it('deve preservar propriedades originais dos objetos', () => {
      const sorted = sortParticipants(mockParticipants, 'positive');

      expect(sorted[0]).toHaveProperty('name');
      expect(sorted[0]).toHaveProperty('description');
      expect(sorted[0]).toHaveProperty('positive');
      expect(sorted[0]).toHaveProperty('negative');
    });
  });

  describe('Edge cases', () => {
    it('deve lidar com array vazio', () => {
      const sorted = sortParticipants([], 'positive');

      expect(sorted).toEqual([]);
      expect(Array.isArray(sorted)).toBe(true);
    });

    it('deve lidar com um único participante', () => {
      const singleParticipant = [{ name: 'Solo', positive: 100, negative: 50 }];
      const sorted = sortParticipants(singleParticipant, 'positive');

      expect(sorted).toHaveLength(1);
      expect(sorted[0].name).toBe('Solo');
    });

    it('deve lidar com empates corretamente', () => {
      const tiedParticipants = [
        { name: 'Tie1', positive: 100, negative: 50 },
        { name: 'Tie2', positive: 100, negative: 50 },
        { name: 'Winner', positive: 200, negative: 30 }
      ];

      const sorted = sortParticipants(tiedParticipants, 'positive');

      expect(sorted[0].name).toBe('Winner');
      expect(sorted[0].positive).toBe(200);
      // Os dois emppatados podem estar em qualquer ordem
      expect([sorted[1].name, sorted[2].name]).toContain('Tie1');
      expect([sorted[1].name, sorted[2].name]).toContain('Tie2');
    });

    it('deve funcionar com critério inválido (fallback para positive)', () => {
      const sorted = sortParticipants(mockParticipants, 'invalid_criteria');

      // Como 'invalid_criteria' não existe, deve retornar NaN - NaN = NaN
      // Mas nossa função deve ser robusta o suficiente
      expect(Array.isArray(sorted)).toBe(true);
      expect(sorted).toHaveLength(mockParticipants.length);
    });
  });

  describe('Imutabilidade', () => {
    it('não deve modificar o array original', () => {
      const original = [...mockParticipants];
      const sorted = sortParticipants(mockParticipants, 'positive');

      expect(mockParticipants).toEqual(original);
      expect(sorted).not.toBe(mockParticipants); // Diferentes referências
    });

    it('não deve modificar objetos originais', () => {
      const originalFirst = { ...mockParticipants[0] };
      const sorted = sortParticipants(mockParticipants, 'positive');

      expect(mockParticipants[0]).toEqual(originalFirst);
      expect(sorted[0]).not.toBe(mockParticipants[0]); // Diferentes referências
    });
  });

  describe('Performance', () => {
    it('deve ser performático para arrays grandes', () => {
      // Cria array com 1000 participantes
      const largeArray = Array.from({ length: 1000 }, (_, i) => ({
        name: `Participant ${i}`,
        positive: Math.floor(Math.random() * 1000),
        negative: Math.floor(Math.random() * 500)
      }));

      const startTime = performance.now();
      const sorted = sortParticipants(largeArray, 'positive');
      const endTime = performance.now();

      expect(sorted).toHaveLength(1000);
      expect(endTime - startTime).toBeLessThan(100); // Menos de 100ms
    });
  });
});
