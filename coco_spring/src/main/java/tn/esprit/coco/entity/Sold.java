package tn.esprit.coco.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Sold {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long soldId;

    @OneToOne

    private User user;

    private long accountSold;

}
