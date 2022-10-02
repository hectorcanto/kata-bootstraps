package domain.repository;

import domain.object.dao.GameDao;
import domain.object.dao.RoundDao;

public interface RoundRepository {

    RoundDao findFirstByGameByIdDesc(GameDao gameDao);
}
