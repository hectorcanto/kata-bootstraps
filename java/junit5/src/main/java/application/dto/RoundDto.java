package application.dto;

import lombok.*;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Data
public class RoundDto {

    GameDto gameDto;

    Integer numLaunchLeft;
}
