package domain.repository.impl;

import domain.object.dao.GameDao;
import domain.object.dao.RoundDao;
import domain.repository.RoundRepository;

//@Repository
public class RoundRepositoryImpl implements RoundRepository {

    @Override
    public RoundDao findFirstByGameByIdDesc(GameDao gameDao){
        //Consultar en DB el ultimo valor insertado de la partida
        return new RoundDao();
    }
}
