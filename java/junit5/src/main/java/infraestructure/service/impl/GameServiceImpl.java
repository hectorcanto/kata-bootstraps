package infraestructure.service.impl;

import domain.object.vo.GameVo;
import infraestructure.service.GameService;

import java.util.UUID;

public class GameServiceImpl implements GameService {

    public GameVo start(Integer number) {
        return GameVo.builder()
                .numRowLeft(number)
                .UUID(String.valueOf(UUID.randomUUID()))
                .build();
    }
}
