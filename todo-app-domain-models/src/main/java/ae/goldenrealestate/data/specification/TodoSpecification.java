package ae.goldenrealestate.data.specification;

import ae.goldenrealestate.data.dto.ProjectCompositeDto;
import ae.goldenrealestate.data.model.ProjectProgress;
import ae.goldenrealestate.data.model.TodoEntity;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class TodoSpecification implements Specification<TodoEntity> {

    private ProjectCompositeDto criteria;

    public TodoSpecification(ProjectCompositeDto criteria) {
        this.criteria = criteria;
    }

    @Override
    public Predicate toPredicate(Root<TodoEntity> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
        List<Predicate> predicates = new ArrayList<>();
        if (criteria.getName() != null)
            predicates.add(criteriaBuilder.equal(root.get("name"), criteria.getName()));
        if (criteria.getProjectProgress() != null)
            predicates.add(criteriaBuilder.equal(root.get("projectProgress"), ProjectProgress.fromString(criteria.getProjectProgress())));
        if (criteria.getBuildingId() != null)
            predicates.add(criteriaBuilder.equal(root.get("building").get("id"), criteria.getBuildingId()));
        if (criteria.getUserId() != null)
            predicates.add(criteriaBuilder.equal(root.get("user").get("id"), criteria.getUserId()));
        return criteriaQuery.where(criteriaBuilder.and(predicates.toArray(new Predicate[0])))
                .distinct(true).getRestriction();

    }
}
