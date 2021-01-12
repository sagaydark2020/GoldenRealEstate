package ae.goldenrealestate.service;

import ae.goldenrealestate.data.model.UserEntity;
import ae.goldenrealestate.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Optional;

@Configuration
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserEntity createUser(UserEntity buildingEntity) {
        return userRepository.save(buildingEntity);
    }

    public UserEntity updateUser(UserEntity buildingEntity) {
        return userRepository.save(buildingEntity);
    }

    public Optional<UserEntity> deleteUser(long id) {
        Optional<UserEntity> buildingEntity = findUserById(id);
        userRepository.deleteById(id);
        return buildingEntity;
    }

    public Optional<UserEntity> findUserById(long id) {
        return userRepository.findById(id);
    }

    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }
}
